import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/live/perqclub")({
  component: PerqLive,
});

const plans = [
  { name: "Starter", price: "₹499", note: "Weekday access" },
  { name: "Club", price: "₹999", note: "Priority booking" },
  { name: "Patron", price: "₹1,799", note: "All locations" },
];

function PerqLive() {
  return (
    <div className="min-h-dvh bg-[#111110] text-[#f4efe7]">
      <header className="flex items-center justify-between px-6 py-5">
        <p className="font-serif text-2xl">PerQClub</p>
        <p className="text-xs tracking-[0.18em] uppercase">Membership</p>
      </header>
      <section className="px-6 py-16">
        <h1 className="max-w-lg font-serif text-5xl leading-none">Café membership, with a proper back office.</h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-[#b8b0a4]">
          Roles, OTP, Razorpay, bookings, and reviews — built in Django.
        </p>
      </section>
      <section className="grid gap-px bg-[#2a2724] sm:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="bg-[#111110] p-6">
            <h2 className="font-serif text-2xl">{plan.name}</h2>
            <p className="mt-3 text-3xl">{plan.price}</p>
            <p className="mt-2 text-sm text-[#b8b0a4]">{plan.note}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
