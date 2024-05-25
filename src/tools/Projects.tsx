import Picture from "./drake.jpg";

interface Project {
  id: number;
  name: string;
  description: string;
  img: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "MindFit",
    description:
      "Developed a personalized travel planning application using OpenAI’s API to tailor itineraries based on user preferences, featuring a Django-based real-time database with RESTful API for seamless management, a responsive React interface for enhanced user experience, and an optimized algorithm for creating and storing user itineraries.",
    img: Picture,
    link: "https://devpost.com/software/mindfit-m9gb38",
  },
  {
    id: 2,
    name: "Liftify",
    description:
      "Developed a personalized travel planning application using OpenAI’s API to tailor itineraries based on user preferences, featuring a Django-based real-time database with RESTful API for seamless management, a responsive React interface for enhanced user experience, and an optimized algorithm for creating and storing user itineraries.",
    img: Picture,
    link: "https://github.com/youngconnorr/Liftify",
  },
  {
    id: 3,
    name: "Photography Portfolio",
    description:
      "Developed a personalized travel planning application using OpenAI’s API to tailor itineraries based on user preferences, featuring a Django-based real-time database with RESTful API for seamless management, a responsive React interface for enhanced user experience, and an optimized algorithm for creating and storing user itineraries.",
    img: Picture,
    link: "https://youngconnorr.github.io/",
  },
  {
    id: 4,
    name: "Valentines",
    description:
      "Developed a personalized travel planning application using OpenAI’s API to tailor itineraries based on user preferences, featuring a Django-based real-time database with RESTful API for seamless management, a responsive React interface for enhanced user experience, and an optimized algorithm for creating and storing user itineraries.",
    img: Picture,
    link: "https://youngconnorr.github.io/Valentines-day/",
  },
  {
    id: 5,
    name: "Hack The North 2024",
    description: "Coming soon",
    img: Picture,
    link: "https://hackthenorth.com/",
  },
];
