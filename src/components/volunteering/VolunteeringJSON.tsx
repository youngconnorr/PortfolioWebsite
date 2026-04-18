export interface Volunteering {
  id: number;
  role: string;
  employer: string;
  languages: string;
  description: string;
  link: string;
}

export const VolunteeringJSON: Volunteering[] = [
  {
    id: 1,
    role: "Computer Science Tutor",
    employer: "Coding Education Tutors 📚",
    languages: "Java | Object Oriented Programming",
    description:
      "Tutored AP students in Java and object-oriented programming, guiding high school students through data structures and algorithms.",
    link: ""
  },
  {
    id: 2,
    role: "Outreach Director",
    employer: "Bridges International 🌍",
    languages: "Event Planning | Community Outreach",
    description:
      "Led outreach initiatives connecting international students through community events and cultural exchange programs.",
    link: ""
  },
  {
    id: 3,
    role: "Software Engineer, Events Director",
    employer: "Product Management Club 🐶",
    languages: "Notion | Roadmapping | Corporate Outreach | Event Planning",
    description:
      "Directed internal events, led interactive software development for events, and managed corporate outreach with major tech companies.",
    link: "https://ubcpmc.com/"
  },
  {
    id: 4,
    role: "Hacakthon Logistics Director",
    employer: "nwPlus 💻",
    languages: "Notion | Event Planning | Cross-functional Collaboration",
    description:
      "Led operations for Western Canada’s largest hackathon (nwHacks), hosting 600+ participants and 30+ sponsors to deliver a high-scale technical event ",
    link: "https://www.nwplus.io/"
  },
];
