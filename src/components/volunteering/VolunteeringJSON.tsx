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
    role: "Hackathon Mentor",
    employer: "nwPlus HackCamp",
    languages: "React | Firebase | Git",
    description:
      "Mentored a 200+ participant hackathon, helping developers debug React, manage API calls, and handle deployment while coordinating with 50+ mentors to maintain smooth operations throughout the 24-hour event.",
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
    role: "Program Director",
    employer: "Product Management Club UBC",
    languages: "Notion | Roadmapping | Corporate Outreach | Event Planning",
    description:
      "Directed internal events and led an internal executive development program for 20 members, enhancing their product management skills. Managed corporate outreach and partnerships with MAANG+ companies (Google, Apple, Spotify), securing sponsorships and resources for club events.",
  },
  {
    id: 4,
    role: "Outreach Director",
    employer: "UBC Bridges International",
    languages: "Event Planning | Community Outreach",
    description:
      "Led outreach initiatives to connect with international students, organizing events that fostered community and cultural exchange. Coordinated with local organizations to provide resources and support for over 100 international students at UBC.",
  }
];
