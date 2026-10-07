import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/ui/PageIntro";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <main>
      <PageIntro
        kicker="Practice"
        title="Services"
        body="Work spanning ecommerce operations, CRM, automations, and full stack development."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-px bg-line lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.number} className="bg-bg p-8 sm:p-10">
              <p className="text-xs tracking-[0.18em] text-muted">{service.number}</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight">{service.title}</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{service.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted">
          Need help with a migration, funnel, or web system?{" "}
          <Link to="/contact" className="text-fg underline underline-offset-4">
            Let’s talk
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
