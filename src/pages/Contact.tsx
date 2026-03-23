import { Helmet } from "react-helmet-async";
export default function Contact() {
  return (
    <section>
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta
          name="description"
          content="Contactez-moi pour des projets, collaborations ou opportunités professionnelles."
        />
      </Helmet>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4">Vous pouvez me contacter depuis cette page.</p>
    
    </section>
  );
}
