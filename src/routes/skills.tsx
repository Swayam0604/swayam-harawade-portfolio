import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { SkillMark } from "@/components/ui/SkillMark";
import { certifications, skills } from "@/data/site";

export const Route = createFileRoute("/skills")({ component: SkillsPage });

function SkillsPage() {
  const groups = [skills.crm, skills.analytics, skills.technical, skills.programming];

  return (
    <main>
      <PageIntro
        kicker="Toolkit"
        title="Skills"
        body="Platforms, languages, and systems used across client work and personal projects."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-12">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="font-serif text-3xl tracking-tight">{group.title}</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 border border-line px-3 py-2 text-sm"
                  >
                    <SkillMark name={item} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-serif text-3xl tracking-tight">Certifications & training</h2>
          <ul className="mt-6 grid gap-0">
            {certifications.map((item) => (
              <li key={item.title} className="border-b border-line">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-12 items-center justify-between gap-4 py-3 text-sm hover:underline"
                >
                  <span>{item.title}</span>
                  <ArrowUpRight className="size-[1em] shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
