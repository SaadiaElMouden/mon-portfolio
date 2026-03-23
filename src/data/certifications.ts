export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Introduction to React",
    issuer: "Coursera",
    issueDate: "2025-11",
    credentialUrl: "https://www.coursera.org",
    skills: ["React", "Components", "Hooks"],
    tags: ["Frontend", "React"],
    image: "/certs/react-cert.webp",
    imageAlt: "Badge React",
    status: "active",
  },
  {
    title: "Java Programming Basics",
    issuer: "OpenClassrooms",
    issueDate: "2025-10",
    skills: ["Java", "POO"],
    tags: ["Java", "Programmation"],
    image: "/certs/java-cert.webp",
    imageAlt: "Badge Java",
    status: "active",
  },
];
