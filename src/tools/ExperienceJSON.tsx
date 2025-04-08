export interface Experience {
  id: number;
  role: string;
  employer: string;
  languages: string;
  description: string;
}

export const ExperienceJSON: Experience[] = [
  // {
  //   id: 1,
  //   role: "Software Engineer Intern",
  //   employer: "UBC Learning Centre",
  //   languages: " ",
  //   description: "Incoming...",
  // },
  {
    id: 1,
    role: "Software Engineer [Part-Time]",
    employer: "UBC Learning Centre",
    languages: "Python | JavaScript | PostgreSQL | Django",
    description:
      "I crafted a full-stack Django app with PostgreSQL for 2,500+ students and 20 professors, streamlining 150+ classes, organizing 180+ requirements across 12 majors with a Python scraper, and integrating JavaScript with SCORM API to create engaging Canvas tools while collaborating closely with faculty.",
  },
  {
    id: 2,
    role: "AP Computer Science Tutor",
    employer: "BeWise Education",
    languages: "Java | Object Oriented Programming",
    description:
      "Tutored AP students in Java and object-oriented programming, adapting lessons and feedback to boost overall grades by 20%. Guided students in mastering data structures and algorithms with clear, simplified explanations to ensure understanding and progress.",
  },
  {
    id: 3,
    role: "Hackathon Mentor",
    employer: "nwPlus HackCamp",
    languages: "React | Firebase | Git",
    description:
      "Mentored a 200+ participant hackathon, helping developers debug React, manage API calls, and handle deployment while coordinating with 50+ mentors to maintain smooth operations throughout the 24-hour event.",
  },
];
