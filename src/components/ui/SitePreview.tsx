import { useEffect, useRef, useState } from "react";
import { Expand, FileText, X } from "lucide-react";
import { DeckViewer } from "@/components/ui/DeckViewer";
import { prepareEmbedHtml } from "@/lib/embed-proxy";
import type { Project } from "@/data/site";

export function SitePreview({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"site" | "deck">("site");
  const [showCta, setShowCta] = useState(false);
  const [docHtml, setDocHtml] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const chromeRef = useRef<HTMLDivElement>(null);
  const ctaTimer = useRef<number | undefined>(undefined);
  const liveUrl = project.websiteUrl;
  const useSrcDoc = Boolean(project.proxyPath);
  const showingDeck = view === "deck" && Boolean(project.deckPath);

  const scheduleCta = () => {
    if (ctaTimer.current || showingDeck) return;
    ctaTimer.current = window.setTimeout(() => setShowCta(true), 7000);
  };

  useEffect(() => {
    if (!project.proxyPath || !liveUrl) return;
    let cancelled = false;
    fetch(project.proxyPath)
      .then((res) => {
        if (!res.ok) throw new Error("preview fetch failed");
        return res.text();
      })
      .then((html) => {
        if (!cancelled) setDocHtml(prepareEmbedHtml(html, liveUrl));
      })
      .catch(() => {
        if (!cancelled) setDocHtml(null);
      });
    return () => {
      cancelled = true;
    };
  }, [project.proxyPath, liveUrl]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || showingDeck) return;
    const attached: Array<{ el: EventTarget; type: string; fn: EventListener }> = [];

    const bindScroller = (doc: Document) => {
      const nodes: EventTarget[] = [
        doc,
        doc.documentElement,
        doc.body,
        doc.querySelector(".page-wrapper") ?? doc.documentElement,
      ].filter(Boolean);
      const fn: EventListener = () => scheduleCta();
      for (const el of nodes) {
        el.addEventListener("scroll", fn, { passive: true });
        el.addEventListener("wheel", fn, { passive: true });
        el.addEventListener("touchmove", fn, { passive: true });
        attached.push({ el, type: "scroll", fn }, { el, type: "wheel", fn }, { el, type: "touchmove", fn });
      }
    };

    const onLoad = () => {
      try {
        const doc = iframe.contentDocument;
        if (doc) bindScroller(doc);
      } catch {
        /* ignore */
      }
    };

    iframe.addEventListener("load", onLoad);
    return () => {
      iframe.removeEventListener("load", onLoad);
      for (const { el, type, fn } of attached) el.removeEventListener(type, fn);
    };
  }, [docHtml, showingDeck]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const frame = (full: boolean) =>
    showingDeck && project.deckPath ? (
      <DeckViewer src={project.deckPath} full={full} />
    ) : useSrcDoc && docHtml ? (
      <iframe
        ref={full ? undefined : iframeRef}
        title={`${project.title} ${full ? "full preview" : "preview"}`}
        srcDoc={docHtml}
        sandbox="allow-scripts"
        className={full ? "h-full w-full flex-1 border-0 bg-bg" : "h-full w-full border-0 bg-bg"}
      />
    ) : liveUrl && !useSrcDoc ? (
      <iframe
        ref={full ? undefined : iframeRef}
        title={`${project.title} ${full ? "full preview" : "preview"}`}
        src={liveUrl}
        sandbox="allow-scripts allow-same-origin"
        className={full ? "h-full w-full flex-1 border-0 bg-bg" : "h-full w-full border-0 bg-bg"}
      />
    ) : (
      <div className="flex h-full items-center justify-center text-sm text-muted">
        Loading live site…
      </div>
    );

  return (
    <>
      <div ref={chromeRef} className="overflow-hidden border border-line bg-chrome scroll-mt-24">
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="size-2 rounded-full bg-stone/50" />
          <span className="size-2 rounded-full bg-stone/50" />
          <span className="size-2 rounded-full bg-stone/50" />
          <span className="ml-2 flex-1 truncate bg-fg/40 px-3 py-1 text-center text-[11px] tracking-wide text-stone">
            {showingDeck ? project.deckFileName : project.previewLabel}
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-8 min-w-8 items-center justify-center text-stone"
            aria-label={`Expand ${project.title}`}
          >
            <Expand className="size-3.5" />
          </button>
        </div>

        <div
          className={
            showingDeck
              ? "relative aspect-video overflow-hidden bg-[#111]"
              : "relative h-[28rem] overflow-hidden bg-bg sm:h-[36rem] lg:h-[44rem]"
          }
          onMouseEnter={() => {
            if (!useSrcDoc && !showingDeck) scheduleCta();
          }}
        >
          {frame(false)}
          {showCta && !showingDeck ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-fg/50">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="min-h-12 bg-fg px-8 text-[12px] tracking-[0.18em] text-bg uppercase shadow-[0_8px_30px_rgba(0,0,0,0.28)]"
              >
                Open website
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {project.deckPath && project.deckFileName ? (
        <button
          type="button"
          onClick={() => {
            setView("deck");
            setShowCta(false);
            window.requestAnimationFrame(() => {
              chromeRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
            });
          }}
          className="mt-3 flex min-h-12 w-full items-center gap-3 border border-line bg-bg px-4 text-left hover:bg-stone"
        >
          <FileText className="size-[1em] shrink-0" />
          <span className="flex-1 truncate text-sm">{project.deckFileName}</span>
          <span className="text-[11px] tracking-[0.16em] text-muted uppercase">
            {showingDeck ? "Showing" : "Open"}
          </span>
        </button>
      ) : null}

      {showingDeck ? (
        <button
          type="button"
          onClick={() => setView("site")}
          className="mt-2 text-sm underline underline-offset-4"
        >
          Back to website
        </button>
      ) : (
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Preview is view-only. Cart, checkout, and payments stay on the real site — use Open website
          / Open in new tab if you need to interact.
        </p>
      )}

      {open ? (
        <div className="fixed inset-0 z-[60] flex h-dvh w-full flex-col bg-[#111]">
          <div className="flex shrink-0 items-center gap-3 border-b border-white/10 px-4 py-3 text-stone">
            <p className="flex-1 truncate font-serif text-lg text-bg">
              {showingDeck ? project.deckFileName : project.title}
            </p>
            {liveUrl && !showingDeck ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden text-xs tracking-wide uppercase sm:inline"
              >
                Open in new tab
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center"
              aria-label="Close preview"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 flex-col">{frame(true)}</div>
        </div>
      ) : null}
    </>
  );
}
