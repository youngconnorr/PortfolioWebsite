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
    role: "Software Engineer Intern",
    employer: "Davinci AI Solutions",
    languages: "React | Django | Docker | PostgreSQL | Claude Code",
    description: "Developed full-stack features for an AI ERP SaaS, building a vector database for faster, more accurate queries, deploying LLM microservices that cut response time from 20s to 500ms, and automating QA to save 20 hrs/week, while working with the CTO to sustain a 94.6% client retention rate",
  },
  {
    id: 2,
    role: "Product Engineer Intern",
    employer: "University of British Columbia",
    languages: "Django | Python | PostgreSQL | Figma",
    description: "Engineered 8 scheduling tools for 5,000+ users, resolving 150+ conflicts with a constraint-based algorithm and boosting query speed 5x with a SQL star schema, while driving iterations through faculty testing and feedback",
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    employer: "UBC Land and Food Systems",
    languages: "Python | JavaScript | SCORM API | PostgreSQL",
    description:
    "I crafted a full-stack Django app with PostgreSQL for 2,500+ students and 20 professors, streamlining 150+ classes, organizing 180+ requirements across 12 majors with a Python scraper, and integrating JavaScript with SCORM API to create engaging Canvas tools while collaborating closely with faculty.",
  },
  {
    id: 4,
    role: "Community Director",
    employer: "Product Management Club UBC",
    languages: "Notion | Roadmapping | Corporate Outreach | Event Planning",
    description:
      "Directed internal events and led an internal executive development program for 20 members, enhancing their product management skills. Managed corporate outreach and partnerships with MAANG+ companies (Google, Apple, Spotify), securing sponsorships and resources for club events.",
  },
  {
    id: 5,
    role: "AP Computer Science Tutor",
    employer: "BeWise Education",
    languages: "Java | Object Oriented Programming",
    description:
      "Tutored AP students in Java and object-oriented programming, adapting lessons and feedback to boost overall grades by 20%. Guided students in mastering data structures and algorithms with clear, simplified explanations to ensure understanding and progress.",
  },
  {
    id: 6,
    role: "Hackathon Mentor",
    employer: "nwPlus HackCamp",
    languages: "React | Firebase | Git",
    description:
      "Mentored a 200+ participant hackathon, helping developers debug React, manage API calls, and handle deployment while coordinating with 50+ mentors to maintain smooth operations throughout the 24-hour event.",
  },
];
