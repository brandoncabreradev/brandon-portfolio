import mayrrhh from "@/assets/img/MAYRRHH.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string | null;
  liveUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
  note?: string;
  noteUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MAYRRHH",
    description:
      "Plataforma de Recursos Humanos que centraliza procesos como planillas, vacaciones y permisos. Participé en el desarrollo de la API, implementando autenticación JWT, control de roles y apoyando en despliegues y mejoras continuas.",
    tags: ["NestJS", "Node.js", "MySQL", "JWT"],
    category: "fullstack",
    image: mayrrhh,
    liveUrl: "https://mayrrhh.com/",
    repoUrl: null,
    featured: true,
    note: "Desarrollado como parte de mi trabajo en Mayfer Dev",
    noteUrl: "https://mayfer.dev/en/home-2/",
  },
];

export const categories = [
  { id: "all", label: "Todos" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
];
