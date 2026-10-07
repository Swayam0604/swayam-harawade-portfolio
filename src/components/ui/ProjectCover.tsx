import { cn } from "@/lib/utils";

export function ProjectCover({
  title,
  kicker,
  tone,
  className,
}: {
  title: string;
  kicker?: string;
  tone: "ink" | "stone";
  className?: string;
}) {
  const dark = tone === "ink";
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        dark ? "bg-fg text-bg" : "bg-stone text-fg",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0">
        <div className={cn("absolute -left-8 -top-8 size-40 rotate-12", dark ? "bg-bg/10" : "bg-fg/5")} />
        <div className={cn("absolute right-8 top-10 h-px w-2/3", dark ? "bg-bg/30" : "bg-fg/20")} />
        <div
          className={cn(
            "absolute bottom-10 left-10 size-24 rounded-full border",
            dark ? "border-bg/25" : "border-fg/20",
          )}
        />
      </div>
      <div className="relative flex min-h-52 flex-col justify-end p-6 sm:min-h-64 sm:p-8">
        {kicker ? (
          <p className="mb-3 text-[10px] tracking-[0.2em] uppercase opacity-70">{kicker}</p>
        ) : null}
        <p className="font-serif text-3xl leading-none tracking-tight sm:text-4xl">{title}</p>
      </div>
    </div>
  );
}
