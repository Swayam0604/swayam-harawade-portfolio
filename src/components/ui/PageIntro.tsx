export function PageIntro({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body?: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">{kicker}</p>
        <h1 className="mt-3 font-serif text-4xl leading-none tracking-tight sm:text-6xl">{title}</h1>
        {body ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{body}</p> : null}
      </div>
    </header>
  );
}
