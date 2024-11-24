export interface Experience {
  id: number;
  role: string;
  employer: string;
  description: string;
}

export const ExperienceJSON: Experience[] = [
  {
    id: 1,
    role: "Software Developer",
    employer: "UBC Learning Centre",
    description:
      "Developed accessible educational applications for 3500+ students and 20+ professors, including interactive JavaScript learning tools with SCORM API integration, such as a quiz-integrated crossword puzzle with detailed feedback. Authored a comprehensive SCORM guide for UBC Learning Centre, collaborated with professors to digitize quizzes, and created intuitive software for non-technical users to enhance course engagement.",
  },
  {
    id: 2,
    role: "AP Computer Science Tutor",
    employer: "BeWise Education",
    description:
      "Tutored AP students in Java and object-oriented programming, adapting lessons and feedback to boost overall grades by 20%. Guided students in mastering data structures and algorithms with clear, simplified explanations to ensure understanding and progress.",
  },
  {
    id: 3,
    role: "Hackathon Mentor",
    employer: "nwPlus HackCamp",
    description:
      "Mentored a 200+ participant hackathon, helping developers debug React, manage API calls, and handle deployment while coordinating with 50+ mentors to maintain smooth operations throughout the 24-hour event.",
  },
];
