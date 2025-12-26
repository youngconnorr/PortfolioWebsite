export interface Experience {
  id: number;
  role: string;
  employer: string;
  languages: string;
  description: string;
}

export const ExperienceJSON: Experience[] = [
  {
    id: 1,
    role: "Software Engineer Intern 🌱",
    employer: "UBC Land and Food Systems",
    languages: "Python | JavaScript | SCORM API | PostgreSQL",
    description:
      "Built a full-stack Django app with PostgreSQL to streamline academic requirements and created interactive Canvas tools using JavaScript and SCORM API.",
  },
  {
    id: 2,
    role: "Software Engineer Intern 🎓",
    employer: "University of British Columbia",
    languages: "Django | Python | PostgreSQL | Figma",
    description: "Engineered scheduling tools to assist professors in course creation and optimized scalability using a SQL star schema.",
  },
  {
    id: 3,
    role: "Software Engineer Intern 🚀",
    employer: "Davinci AI",
    languages: "React | Django | Docker | PostgreSQL | Claude Code",
    description: "Developed full-stack features for an AI ERP SaaS, including LLM microservices, and intuitive features for user experience.",
  },
  {
    id: 4,
    role: "ML Data Scientist Intern 🧠",
    employer: "GeoComply",
    languages: "",
    description: "Incoming Winter 2026",
  },
];
