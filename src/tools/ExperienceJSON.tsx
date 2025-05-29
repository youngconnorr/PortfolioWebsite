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
    role: "Product Mangement Intern",
    employer: "University of British Columbia",
    languages: "Roadmapping | User Research | Django | Figma",
    description: "Led the product vision and roadmapping of 3 major 4 month long projects. After roadmapping, I used Figma to create wireframes and prototypes for the projects, and then used Django to implement the projects.",
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    employer: "University of British Columbia",
    languages: "Python | JavaScript | PostgreSQL | Django",
    description:
    "I crafted a full-stack Django app with PostgreSQL for 2,500+ students and 20 professors, streamlining 150+ classes, organizing 180+ requirements across 12 majors with a Python scraper, and integrating JavaScript with SCORM API to create engaging Canvas tools while collaborating closely with faculty.",
  },
  {
    id: 3,
    role: "Community Director",
    employer: "Product Management Club UBC",
    languages: "Notion | Roadmapping | Corporate Outreach | Event Planning",
    description:
      "Directed internal events and led an internal executive development program for 20 members, enhancing their product management skills. Managed corporate outreach and partnerships with MAANG+ companies (Google, Apple, Spotify), securing sponsorships and resources for club events.",
  },
  {
    id: 4,
    role: "AP Computer Science Tutor",
    employer: "BeWise Education",
    languages: "Java | Object Oriented Programming",
    description:
      "Tutored AP students in Java and object-oriented programming, adapting lessons and feedback to boost overall grades by 20%. Guided students in mastering data structures and algorithms with clear, simplified explanations to ensure understanding and progress.",
  },
  {
    id: 5,
    role: "Hackathon Mentor",
    employer: "nwPlus HackCamp",
    languages: "React | Firebase | Git",
    description:
      "Mentored a 200+ participant hackathon, helping developers debug React, manage API calls, and handle deployment while coordinating with 50+ mentors to maintain smooth operations throughout the 24-hour event.",
  },
];
