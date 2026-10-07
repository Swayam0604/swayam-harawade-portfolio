export const EMBEDS: Record<string, string> = {
  satvic: "https://www.thesatvicorigin.com",
  coffee: "https://cafe-connect-zeta.vercel.app",
};

type EmbedMatch = {
  key: string;
  targetOrigin: string;
  path: string;
};

export function matchEmbed(pathname: string): EmbedMatch | null {
  const m = pathname.match(/^\/embed\/(satvic|coffee)(?=\/|$)/);
  if (!m) return null;
  const key = m[1];
  const rest = pathname.slice(`/embed/${key}`.length) || "/";
  return { key, targetOrigin: EMBEDS[key], path: rest.startsWith("/") ? rest : `/${rest}` };
}

const DROP_REQ = new Set([
  "host",
  "connection",
  "content-length",
  "accept-encoding",
  "cookie",
]);

const DROP_RES = new Set([
  "x-frame-options",
  "content-security-policy",
  "content-security-policy-report-only",
  "transfer-encoding",
  "content-encoding",
  "content-length",
]);

export function prepareEmbedHtml(html: string, liveOrigin: string) {
  const base = liveOrigin.endsWith("/") ? liveOrigin : `${liveOrigin}/`;
  html = html.replace(/<base\b[^>]*>/gi, "");
  html = html.replace(/<meta[^>]*http-equiv=["']Content-Security-Policy["'][^>]*>/gi, "");
  if (/<head/i.test(html)) {
    html = html.replace(/<head([^>]*)>/i, `<head$1><base href="${base}">`);
  }
  return html;
}

export async function proxyEmbed(
  request: Request,
  pathname: string,
  search: string,
): Promise<Response | null> {
  const match = matchEmbed(pathname);
  if (!match) return null;

  const targetUrl = `${match.targetOrigin}${match.path}${search}`;
  const headers = new Headers();
  request.headers.forEach((value, key) => {
    if (!DROP_REQ.has(key.toLowerCase())) headers.set(key, value);
  });
  headers.set("host", new URL(match.targetOrigin).host);

  const upstream = await fetch(targetUrl, {
    method: request.method,
    headers,
    redirect: "follow",
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
  });

  const outHeaders = new Headers();
  upstream.headers.forEach((value, key) => {
    if (!DROP_RES.has(key.toLowerCase())) outHeaders.set(key, value);
  });
  outHeaders.set("cache-control", "no-store");

  const ctype = upstream.headers.get("content-type") ?? "";
  if (ctype.includes("text/html")) {
    let html = await upstream.text();
    html = prepareEmbedHtml(html, match.targetOrigin);
    outHeaders.set("content-type", "text/html; charset=utf-8");
    return new Response(html, { status: 200, headers: outHeaders });
  }

  const buf = await upstream.arrayBuffer();
  return new Response(buf, { status: upstream.status, headers: outHeaders });
}
