import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{site.role} · {site.location}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={site.email ? `mailto:${site.email}` : "#"} className="underline-offset-4 hover:underline">
            Email
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            GitHub
          </a>
          <Link to="/contact" className="underline-offset-4 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
