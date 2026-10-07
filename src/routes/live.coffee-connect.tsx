import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/live/coffee-connect")({
  component: CoffeeConnectLive,
});

const branches = [
  { name: "Bandra", hours: "8am – 10pm", order: "Order on Zomato" },
  { name: "Andheri", hours: "8am – 11pm", order: "Order on Zomato" },
  { name: "Powai", hours: "9am – 10pm", order: "Order on Zomato" },
];

const menu = [
  { name: "Pour Over", price: "₹220", note: "Single origin, rotating" },
  { name: "Cortado", price: "₹180", note: "House espresso" },
  { name: "Cardamom Bun", price: "₹140", note: "Baked daily" },
];

const events = [
  { title: "Sunday tasting", place: "Bandra", when: "Every Sunday, 11am" },
  { title: "Open mic", place: "Andheri", when: "First Friday" },
];

function CoffeeConnectLive() {
  return (
    <div className="min-h-dvh bg-[#f7f1e8] text-[#2b2218]">
      <header className="flex items-center justify-between px-6 py-5">
        <p className="font-serif text-2xl">Coffee Connect</p>
        <p className="text-xs tracking-[0.2em] uppercase">Mumbai cafés</p>
      </header>
      <section className="px-6 pb-12 pt-8">
        <p className="text-xs tracking-[0.2em] uppercase">Self-initiated concept</p>
        <h1 className="mt-3 max-w-xl font-serif text-5xl leading-none">Find a branch. Open the menu. Order in.</h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-[#6a5d50]">
          Branch discovery, flipbook menus, Zomato ordering, and community events on one page.
        </p>
      </section>
      <section className="grid gap-px bg-[#d9cfc0] sm:grid-cols-3">
        {branches.map((b) => (
          <article key={b.name} className="bg-[#f7f1e8] p-6">
            <h2 className="font-serif text-2xl">{b.name}</h2>
            <p className="mt-2 text-sm text-[#6a5d50]">{b.hours}</p>
            <span className="mt-4 inline-block border border-[#2b2218] px-3 py-2 text-xs tracking-wide uppercase">
              {b.order}
            </span>
          </article>
        ))}
      </section>
      <section className="grid gap-8 px-6 py-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">Flipbook menu</h2>
          <ul className="mt-5">
            {menu.map((item) => (
              <li key={item.name} className="flex items-baseline justify-between border-b border-[#d9cfc0] py-3 text-sm">
                <span>
                  {item.name}
                  <span className="ml-2 text-[#6a5d50]">{item.note}</span>
                </span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Events</h2>
          <ul className="mt-5">
            {events.map((e) => (
              <li key={e.title} className="border-b border-[#d9cfc0] py-3">
                <p className="font-medium">{e.title}</p>
                <p className="text-sm text-[#6a5d50]">
                  {e.place} · {e.when}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
