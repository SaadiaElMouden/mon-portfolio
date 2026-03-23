export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "FST",
    degree: "Licence",
    field: "SIR",
    location: "Marrakech",
    start: "2022-09",
    end: "2026-07",
    courses: [
      "Développement Web",
      "Bases de données",
      "Programmation Java",
      "Systèmes d'exploitation",
    ],
    highlights: ["Réalisation de projets académiques en Java et React"],
  },
];
