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
    employer: "UBC Learning Centre",
    languages: " ",
    description: "Incoming...",
  },
  {
    id: 2,
    role: "Software Engineer [Part-Time]",
    employer: "UBC Learning Centre",
    languages:
      "Python | JavaScript | PostgreSQL | Apache Superset | pandas | bs4",
    description:
      "Developed educational software for 2500+ students and 20+ professors. Automated the management of 250+ class requirements across 12 majors using Python, Beautiful Soup. Created an ETL pipeline of 500+ lines of faculty data using Python PostgreSQL, and Apache Superset. Built interactive learning tools for 700+ students with JavaScript and SCORM API, including a quiz-integrated crossword puzzle. Collaborated with professors to create custom quiz software, manage faculty data, and provide IT support.",
  },
  {
    id: 3,
    role: "AP Computer Science Tutor",
    employer: "BeWise Education",
    languages: "Java | Object Oriented Programming",
    description:
      "Tutored AP students in Java and object-oriented programming, adapting lessons and feedback to boost overall grades by 20%. Guided students in mastering data structures and algorithms with clear, simplified explanations to ensure understanding and progress.",
  },
  {
    id: 4,
    role: "Hackathon Mentor",
    employer: "nwPlus HackCamp",
    languages: "React | Firebase | Git",
    description:
      "Mentored a 200+ participant hackathon, helping developers debug React, manage API calls, and handle deployment while coordinating with 50+ mentors to maintain smooth operations throughout the 24-hour event.",
  },
];
