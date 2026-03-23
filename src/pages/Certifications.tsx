import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Helmet } from "react-helmet-async";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return certifications
      .filter((c) =>
        [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase()),
      )
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  }, [q]);

  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Certifications — Portfolio</title>
        <meta
          name="description"
          content="Mes certifications en développement, programmation et technologies web."
        />
      </Helmet>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold">Certifications</h2>

        <input
          placeholder="Filtrer (ex: React, Java)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-xl border px-3 py-2 md:w-72"
          aria-label="Filtrer les certifications"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} c={c} />
        ))}
      </div>
    </section>
  );
}
