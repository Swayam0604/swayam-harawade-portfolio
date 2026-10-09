import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SitePreview } from "@/components/ui/SitePreview";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw notFound();

  return (
    <main>
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">
            {project.kind}
            {project.period ? ` · ${project.period}` : ` · ${project.year}`}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-none tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <SitePreview project={project} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_260px]">
          <div className="grid gap-12">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-3xl tracking-tight">{section.heading}</h2>
                {section.body ? (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{section.body}</p>
                ) : null}
                {section.items ? (
                  <ul className="mt-5 grid gap-0">
                    {section.items.map((item) => (
                      <li key={item} className="border-b border-line py-3 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section>
              <h2 className="font-serif text-3xl tracking-tight">What it includes</h2>
              <ul className="mt-5 grid gap-0">
                {project.features.map((feature) => (
                  <li key={feature} className="border-b border-line py-3 text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit border border-line p-6">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">Stack</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-sm underline underline-offset-4"
              >
                GitHub
              </a>
            ) : null}
            {project.websiteUrl ? (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-sm underline underline-offset-4"
              >
                Live site
              </a>
            ) : null}
            {project.pdfFileName ? (
              <p className="mt-6 text-xs tracking-[0.18em] text-muted uppercase">Case note</p>
            ) : project.deckFileName ? (
              <p className="mt-6 text-xs tracking-[0.18em] text-muted uppercase">Case study</p>
            ) : null}
            {project.pdfFileName ? (
              <p className="mt-2 text-sm">{project.pdfFileName}</p>
            ) : project.deckFileName ? (
              <p className="mt-2 text-sm">{project.deckFileName}</p>
            ) : null}
          </aside>
        </div>

        <Link to="/projects" className="mt-12 inline-flex min-h-11 items-center gap-2 text-sm">
          <ArrowLeft className="size-4" /> All projects
        </Link>
      </div>
    </main>
  );
}
