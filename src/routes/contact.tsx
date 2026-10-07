import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageIntro } from "@/components/ui/PageIntro";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <main>
      <PageIntro
        kicker="Studio"
        title="Contact"
        body="Let’s build something — automations, ecommerce systems, or a full stack product."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <aside className="grid h-fit gap-6 border border-line p-6">
          <div>
            <p className="text-xs tracking-[0.18em] text-muted uppercase">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-sm underline underline-offset-4">
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-muted uppercase">WhatsApp</p>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="mt-2 block text-sm">
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-muted uppercase">Location</p>
            <p className="mt-2 text-sm">{site.location}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-muted uppercase">Elsewhere</p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                LinkedIn
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                GitHub
              </a>
            </div>
          </div>
        </aside>
        <ContactForm />
      </div>
    </main>
  );
}
