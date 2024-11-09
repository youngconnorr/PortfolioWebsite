import mindfit from "./mindfit.png";
import liftify from "./liftify.png";
import photoWebsite from "./photoWebsite.png";
import stockAnalyzer from "./stock_analyzer_photo.png";
// import valentineDays from "./valentinesDay.png";

export interface Project {
  id: number;
  name: string;
  description: string;
  img: string;
  imgWidth: string;
  imgHeight: string;
  link: string;
}

export const projectJSON: Project[] = [
  {
    id: 1,
    name: "Photography Portfolio",
    description:
      "Designed a responsive front-end web application with React and CSS to display my personal photography portfolio. Implementing simple algorithms such as a circular array for interactive image cycling.",
    img: photoWebsite,
    imgWidth: "35vw",
    imgHeight: "30vh",
    link: "https://cyoungphotos.netlify.app",
  },
  {
    id: 2,
    name: "Liftify",
    description:
      "Assembled a Java application to log exercises across various workout categories, enhancing user convenience and data organization. Constructed a dynamic GUI using Java Swing to optimize user interactions and overall usability.",
    img: liftify,
    imgWidth: "30vw",
    imgHeight: "35vh",
    link: "https://github.com/youngconnorr/Liftify",
  },
  {
    id: 3,
    name: "MindFit",
    description:
      "Programmed an interactive React app with omnichannel features to integrate personalized exercise and meditation into students’ schedules. Project from YouCode 2024 hackathon.",
    img: mindfit,
    imgWidth: "35vw",
    imgHeight: "30vh",
    link: "https://devpost.com/software/mindfit-m9gb38",
  },
  {
    id: 4,
    name: "PathFinder",
    description:
      "Developed an intelligent itinerary planning web application utilizing the OpenAI API for personalized travel plans across 4000+ cities. Used React, Django, SQLite, and the OpenAI API.",
    img: mindfit,
    imgWidth: "35vw",
    imgHeight: "30vh",
    link: "https://github.com/youngconnorr/PathFinder",
  },
  {
    id: 5,
    name: "Stock Scout",
    description:
      "Designed an object-oriented Python app to monitor real-time stock market data, providing users with accurate information to make informed investment decisions. Built with python, pandas, and Yahoo Finance API, visualizing stock value through matplotlib.",
    img: stockAnalyzer,
    imgWidth: "35vw",
    imgHeight: "30vh",
    link: "https://github.com/youngconnorr/python-stock-analyzer",
  },
];
