import { proxyEmbed } from "../../src/lib/embed-proxy";

interface Event {
  url: URL;
  req: { method: string; headers: Headers };
}

export default async function embedProxyMiddleware(
  event: Event,
  next: () => Promise<unknown>,
) {
  const path = event.url.pathname;
  if (!path.startsWith("/embed/")) return next();

  const host =
    event.req.headers.get("x-forwarded-host") ??
    event.req.headers.get("host") ??
    event.url.host;
  const proto = event.req.headers.get("x-forwarded-proto") ?? event.url.protocol.replace(":", "");
  const origin = `${proto}://${host}`;
  const request = new Request(`${origin}${event.url.pathname}${event.url.search}`, {
    method: event.req.method,
    headers: event.req.headers,
  });
  const response = await proxyEmbed(request, path, event.url.search);
  return response ?? next();
}
