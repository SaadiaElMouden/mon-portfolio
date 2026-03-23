export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio React",
    period: "2026",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    summary:
      "Portfolio personnel développé avec React et TypeScript pour présenter mon parcours, mes projets et mes compétences.",
    repo: "https://github.com/SaadiaElMouden/mon-portfolio",
  },
  {
    title: "Application de gestion de cinéma",
    period: "2026",
    tags: ["Java", "Spring Boot", "Thymeleaf"],
    summary:
      "Application web permettant de gérer les films, les séances et les billets dans un contexte de gestion de cinéma.",
  },
];
