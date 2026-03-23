import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";
export default function Projects() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta
          name="description"
          content="Découvrez les projets que j'ai réalisés en React, Java et développement web."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Projets</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border p-4 transition hover:shadow"
          >
            <h3 className="font-semibold">{p.title}</h3>

            <p className="mt-2 text-sm text-gray-600">{p.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border px-2 py-1">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3 text-sm">
              {p.link && (
                <a
                  className="underline"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}

              {p.repo && (
                <a
                  className="underline"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
