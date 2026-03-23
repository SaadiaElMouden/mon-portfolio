import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";
function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Formations — Portfolio</title>
        <meta
          name="description"
          content="Mon parcours académique et les formations suivies en développement et informatique."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Formations</h2>

      <ol className="relative border-s ps-4">
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-4 pb-6">
            <h3 className="font-semibold">
              {e.degree}
              {e.field ? ` — ${e.field}` : ""} @ {e.school}
            </h3>

            <p className="text-sm text-gray-600">
              {fmt(e.start)} — {fmt(e.end)}{" "}
              {e.location ? `• ${e.location}` : ""}{" "}
              {e.gpa ? `• GPA ${e.gpa}` : ""}
            </p>

            {e.courses?.length ? (
              <p className="mt-2 text-sm">
                Cours : {e.courses.slice(0, 5).join(", ")}
              </p>
            ) : null}

            {e.highlights?.length ? (
              <ul className="mt-2 ms-5 list-disc text-sm">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
