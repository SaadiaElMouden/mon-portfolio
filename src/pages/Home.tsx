import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="grid items-center gap-6 md:grid-cols-2">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio personnel réalisé avec React, TypeScript et Tailwind CSS."
        />
      </Helmet>

      <div>
        <h1 className="text-4xl font-bold md:text-5xl">{profile.name}</h1>

        <p className="mt-2 text-xl">{profile.role}</p>

        <p className="mt-4 text-gray-600">{profile.about}</p>

        <div className="mt-6 flex gap-3">
          <Link to="/projects" className="underline">
            Voir les projets
          </Link>
          <Link to="/contact" className="underline">
            Contact
          </Link>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-2 text-sm"
          aria-label="badges de parcours"
        >
          <span className="rounded-full border px-3 py-1">React</span>
          <span className="rounded-full border px-3 py-1">TypeScript</span>
          <span className="rounded-full border px-3 py-1">Spring Boot</span>
        </div>
      </div>

      <div
        className="aspect-square rounded-2xl border"
        role="img"
        aria-label="illustration de profil"
      />
    </section>
  );
}
