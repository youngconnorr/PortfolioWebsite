export interface Volunteering {
  id: number;
  role: string;
  employer: string;
  languages: string;
  description: string;
}

export const VolunteeringJSON: Volunteering[] = [
  {
    id: 1,
    role: "Hackathon Mentor 💻",
    employer: "nwPlus HackCamp",
    languages: "React | Firebase | Git",
    description:
      "Mentored hackathon participants by helping developers debug React, manage API calls, and handle deployment.",
  },
  {
    id: 2,
    role: "AP Computer Science Tutor 📚",
    employer: "BeWise Education",
    languages: "Java | Object Oriented Programming",
    description:
      "Tutored AP students in Java and object-oriented programming, guiding them through data structures and algorithms.",
  },
  {
    id: 3,
    role: "Program Director 📋",
    employer: "Product Management Club UBC",
    languages: "Notion | Roadmapping | Corporate Outreach | Event Planning",
    description:
      "Directed internal events, led executive development programs, and managed corporate outreach with major tech companies.",
  },
  {
    id: 4,
    role: "Outreach Director 🌍",
    employer: "UBC Bridges International",
    languages: "Event Planning | Community Outreach",
    description:
      "Led outreach initiatives connecting international students through community events and cultural exchange programs.",
  }
];
