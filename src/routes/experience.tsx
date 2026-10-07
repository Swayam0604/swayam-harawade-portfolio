import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/ui/PageIntro";
import { education, experience } from "@/data/site";

export const Route = createFileRoute("/experience")({ component: ExperiencePage });

function ExperiencePage() {
  return (
    <main>
      <PageIntro
        kicker="Timeline"
        title="Experience"
        body="CRM, marketing automation, and web systems — from internships to freelance operations support."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ol className="grid gap-12">
          {experience.map((role) => (
            <li key={role.title} className="grid gap-4 border-b border-line pb-12 last:border-b-0 last:pb-0 lg:grid-cols-[220px_1fr]">
              <p className="text-sm text-muted">{role.period}</p>
              <div>
                <h2 className="font-serif text-3xl tracking-tight">{role.title}</h2>
                <p className="mt-1 text-sm">{role.org}</p>
                <ul className="mt-5 grid gap-2 text-sm leading-relaxed text-muted">
                  {role.bullets.map((item) => (
                    <li key={item} className="pl-4 relative before:absolute before:left-0 before:top-2 before:size-1 before:bg-fg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight">Education</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {education.map((item) => (
              <article key={item.title} className="border border-line p-6">
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
