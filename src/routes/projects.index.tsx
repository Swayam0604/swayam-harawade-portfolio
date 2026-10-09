import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects/")({ component: ProjectsPage });

function ProjectsPage() {
  return (
    <main>
      <PageIntro
        kicker="Work"
        title="Projects"
        body="Shopify storefronts, webinar systems, café product thinking, and full stack membership platforms."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-12">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="grid gap-6 border-b border-line pb-12 last:border-0 last:pb-0 lg:grid-cols-2 lg:items-center"
            >
              <ProjectCover
                title={project.title}
                kicker={project.kind}
                tone={project.tone}
                className="min-h-64"
              />
              <div>
                <p className="text-xs tracking-[0.18em] text-muted uppercase">
                  {project.kind} · {project.year}
                </p>
                <h2 className="mt-3 font-serif text-4xl tracking-tight">{project.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{project.summary}</p>
                <p className="mt-6 text-sm">Open case study →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
