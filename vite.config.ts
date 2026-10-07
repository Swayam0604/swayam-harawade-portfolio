import type { Plugin } from "vite";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

function embedProxyPlugin(): Plugin {
  return {
    name: "portfolio:embed-proxy",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          const rawUrl = req.url ?? "";
          const pathOnly = rawUrl.split("?", 1)[0] ?? "";
          if (!pathOnly.startsWith("/embed/")) {
            next();
            return;
          }
          const host = String(req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost:3000");
          const proto = String(req.headers["x-forwarded-proto"] ?? "http");
          const requestHeaders = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (value === undefined) continue;
            if (Array.isArray(value)) {
              for (const v of value) requestHeaders.append(key, v);
            } else {
              requestHeaders.set(key, value);
            }
          }
          const request = new Request(`${proto}://${host}${rawUrl}`, {
            method: req.method ?? "GET",
            headers: requestHeaders,
          });
          const { proxyEmbed } = (await server.ssrLoadModule("/src/lib/embed-proxy.ts")) as {
            proxyEmbed: (request: Request, pathname: string, search: string) => Promise<Response | null>;
          };
          const search = rawUrl.includes("?") ? `?${rawUrl.split("?")[1]}` : "";
          const response = await proxyEmbed(request, pathOnly, search);
          if (!response) {
            next();
            return;
          }
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch {
          if (!res.headersSent) {
            res.statusCode = 502;
            res.end("preview failed");
          }
        }
      });
    },
  };
}

export default defineConfig(({ command, isPreview }) => ({
  server: { host: "0.0.0.0", port: 3000 },
  resolve: { tsconfigPaths: true },
  plugins: [
    embedProxyPlugin(),
    tailwindcss(),
    tanstackStart(),
    ...(command === "build" || isPreview
      ? [nitro({ preset: "vercel", serverDir: "./server" })]
      : []),
    viteReact(),
  ],
}));
