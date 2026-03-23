import { Helmet } from "react-helmet-async";
export default function Experience() {
  return (
    <section>
      <Helmet>
        <title>Parcours — Portfolio</title>
        <meta
          name="description"
          content="Mon parcours académique et mes expériences dans le développement logiciel."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Parcours</h2>
      <p className="mt-2 text-gray-600">Ajouter expériences ici.</p>
    </section>
  );
}
