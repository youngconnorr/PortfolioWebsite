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
    role: "Software Developer",
    employer: "UBC Learning Centre",
    languages: "Python | JavaScript",
    description:
      "Developed software solutions for 3,500+ students and 20+ professors, streamlining course organization and reducing manual effort. Automated the management of 180+ class requirements across 12 majors using Python, Beautiful Soup, and pandas. Built interactive learning tools for 700+ students with JavaScript and SCORM API, including a quiz-integrated crossword puzzle. Collaborated with professors to create custom quiz software, manage faculty data, and provide IT support.",
  },
  {
    id: 2,
    role: "AP Computer Science Tutor",
    employer: "BeWise Education",
    languages: "Java | Object Oriente Programming",
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
