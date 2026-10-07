import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/live/satvic-origin")({
  component: SatvicLive,
});

const scents = ["Jasmine", "Tulsi", "Rose", "Sandalwood", "Lavender", "Saffron"];

function SatvicLive() {
  return (
    <div className="min-h-dvh bg-[#f3efe6] text-[#1f1a14]">
      <header className="flex items-center justify-between px-6 py-5">
        <p className="font-serif text-xl tracking-[0.18em] uppercase">The Satvic Origin</p>
        <p className="text-xs tracking-[0.16em] uppercase">Shop · About · Journal</p>
      </header>
      <section className="px-6 py-16">
        <p className="text-xs tracking-[0.22em] uppercase">Pre-order · Deliveries in 2 weeks</p>
        <h1 className="mt-4 max-w-lg font-serif text-5xl leading-none">Six fragrances. One origin.</h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-[#6a6258]">
          Buy 2 for ₹699 · Buy 3 for ₹999. Free shipping at ₹599+.
        </p>
        <span className="mt-6 inline-block bg-[#1f1a14] px-5 py-3 text-xs tracking-[0.16em] text-[#f3efe6] uppercase">
          Shop the collection
        </span>
      </section>
      <section className="grid gap-px bg-[#d8d0c2] sm:grid-cols-3">
        {scents.map((scent) => (
          <article key={scent} className="bg-[#f3efe6] p-6">
            <p className="text-[10px] tracking-[0.2em] uppercase">Fragrance</p>
            <h2 className="mt-2 font-serif text-2xl">{scent}</h2>
            <p className="mt-3 text-sm text-[#6a6258]">Pre-order · Add to cart</p>
          </article>
        ))}
      </section>
      <section className="grid gap-6 px-6 py-12 sm:grid-cols-3">
        <p className="text-sm">Judge.me reviews</p>
        <p className="text-sm">Razorpay checkout</p>
        <p className="text-sm">Shipping ₹99 below ₹599</p>
      </section>
    </div>
  );
}
