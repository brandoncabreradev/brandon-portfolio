import mayrrhh from "@/assets/img/MAYRRHH.png";
import impulsoApp from "@/assets/img/Impulso.png";
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

  {
    id: 2,
    title: "Tu gimnasio en la palma de tu mano",
    description:
      "Diseñada para complementar tu entrenamiento Fitness en Guatemala, esta aplicación te permite personalizar tus rutinas, monitorear tu progreso y acceder a recursos exclusivos desde tu dispositivo móvil.",
    tags: ["Vue.js", "NestJS", "MySQL", "Expo", "Firebase"],
    category: "fullstack",
    image: impulsoApp,
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.impulsofitness.app",
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
