import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { projects, services, site } from "@/data/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = projects[0];

  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.22em] text-muted uppercase">
              {site.location}
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[0.9] tracking-tight sm:text-7xl">
              {site.firstName}
              <br />
              {site.lastName}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{site.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex min-h-12 items-center bg-fg px-5 text-sm font-medium text-bg"
              >
                View projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center border border-fg px-5 text-sm font-medium"
              >
                Commission
              </Link>
            </div>
          </div>
          <Link to="/projects/$slug" params={{ slug: featured.slug }} className="block">
            <ProjectCover
              title={featured.title}
              kicker={`Feature · ${featured.kind}`}
              tone={featured.tone}
              className="min-h-72 sm:min-h-80"
            />
          </Link>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">Selected</p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">Projects</h2>
            </div>
            <Link to="/projects" className="hidden items-center gap-1 text-sm md:inline-flex">
              Index <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="group block"
              >
                <ProjectCover title={project.title} kicker={project.kind} tone={project.tone} />
                <h3 className="mt-4 font-serif text-2xl tracking-tight">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">Practice</p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">Services</h2>
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="bg-bg p-6">
                <p className="text-xs tracking-[0.18em] text-muted">{service.number}</p>
                <h3 className="mt-3 font-serif text-2xl tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
