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
      "I crafted a full-stack Django app with PostgreSQL for 2,500+ students and 20 professors, streamlining 150+ classes, organizing 180+ requirements across 12 majors with a Python scraper, and integrating JavaScript with SCORM API to create engaging Canvas tools while collaborating closely with faculty.",
  },
  {
    id: 2,
    role: "Software Engineer Intern 🎓",
    employer: "University of British Columbia",
    languages: "Django | Python | PostgreSQL | Figma",
    description: "Engineered 8 scheduling tools for 5,000+ users, resolving 150+ conflicts with a constraint-based algorithm and boosting query speed 5x with a SQL star schema, while driving iterations through faculty testing and feedback",
  },
  {
    id: 3,
    role: "Software Engineer Intern 🚀",
    employer: "Davinci AI",
    languages: "React | Django | Docker | PostgreSQL | Claude Code",
    description: "Developed full-stack features for an AI ERP SaaS, building a vector database for faster, more accurate queries, deploying LLM microservices that cut response time from 20s to 500ms, and automating QA to save 20 hrs/week, while working with the CTO to sustain a 94.6% client retention rate",
  },
  {
    id: 4,
    role: "ML Data Scientist Intern 🧠",
    employer: "GeoComply",
    languages: "",
    description: "Incoming Winter 2026",
  },
];
