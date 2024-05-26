import Picture from "./drake.jpg";
import mindfit from "./mindfit.png";

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
      "Programmed an interactive React app to integrate personalized exercise and meditation into students’ schedules. Achieved an honourable mention for the YouCode 2024 Hackathon",
    img: mindfit,
    link: "https://devpost.com/software/mindfit-m9gb38",
  },
  {
    id: 2,
    name: "Liftify",
    description:
      "Assembled a comprehensive Java application with a dynamic GUI using Java swing that logged workout personal records in different categories, elevating user convenience and data organization.",
    img: Picture,
    link: "https://github.com/youngconnorr/Liftify",
  },
  {
    id: 3,
    name: "Photography Portfolio",
    description:
      "Designed an interactive and dynamic React website displaying my portfolio as a photographer",
    img: Picture,
    link: "https://youngconnorr.github.io/",
  },
  {
    id: 4,
    name: "Valentines",
    description:
      "Made a website for valentine's day using Javascript, HTML and CSS.",
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
