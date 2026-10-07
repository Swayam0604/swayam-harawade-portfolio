import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Deck = {
  fileName: string;
  slides: { image: string }[];
};

export function DeckViewer({ src, full }: { src: string; full?: boolean }) {
  const [deck, setDeck] = useState<Deck | null>(null);
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((r) => r.json())
      .then((data: Deck) => {
        if (!cancelled) {
          setDeck(data);
          setIndex(0);
        }
      })
      .catch(() => {
        if (!cancelled) setDeck(null);
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!deck) return;
      if (e.key === "ArrowRight") setIndex((i) => Math.min(deck.slides.length - 1, i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deck]);

  if (!deck) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-muted">
        Loading presentation…
      </div>
    );
  }

  const go = (dir: number) => setIndex((i) => Math.min(deck.slides.length - 1, Math.max(0, i + dir)));
  const slide = deck.slides[index];

  return (
    <div className="relative h-full min-h-0 w-full flex-1 overflow-hidden bg-[#111]">
      <div
        className="absolute inset-0"
        onTouchStart={(e) => {
          touchX.current = e.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const start = touchX.current;
          const end = e.changedTouches[0]?.clientX;
          touchX.current = null;
          if (start == null || end == null) return;
          const delta = end - start;
          if (delta < -40) go(1);
          if (delta > 40) go(-1);
        }}
      >
        <img
          src={slide.image}
          alt={`${deck.fileName} slide ${index + 1}`}
          draggable={false}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent px-2 py-2 text-stone sm:px-4 sm:py-3">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          className="pointer-events-auto inline-flex min-h-11 min-w-11 items-center justify-center disabled:opacity-30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5" />
        </button>
        <p className="max-w-[60%] truncate text-center text-[10px] tracking-[0.16em] uppercase sm:text-xs">
          {index + 1} / {deck.slides.length}
          {full ? ` · ${deck.fileName}` : ""}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={index === deck.slides.length - 1}
          className="pointer-events-auto inline-flex min-h-11 min-w-11 items-center justify-center disabled:opacity-30"
          aria-label="Next slide"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
