import mindfit from "./mindfit.png";
import liftify from "./liftify.png";
import photoWebsite from "./photoWebsite.png";
import stockAnalyzer from "./stock_analyzer_photo.png";
import advizrPhoto from "./advizr-photo.png";
// import valentineDays from "./valentinesDay.png";
import moodifyPhoto from "./moodify-photo.png";

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
    imgWidth: "26vw",
    imgHeight: "28vh",
    link: "https://cyoungphotos.netlify.app",
  },
  {
    id: 2,
    name: "Liftify",
    description:
      "Assembled a Java application to log exercises across various workout categories, streamlining progress tracking. Constructed a dynamic GUI using Java Swing to optimize user interactions and overall usability.",
    img: liftify,
    imgWidth: "25w",
    imgHeight: "20vh",
    link: "https://github.com/youngconnorr/Liftify",
  },
  {
    id: 3,
    name: "MindFit",
    description:
      "Programmed an interactive React app with omnichannel features to integrate personalized exercise and meditation into students’ schedules. Project from YouCode 2024 hackathon.",
    img: mindfit,
    imgWidth: "30vw",
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
    imgWidth: "25vw",
    imgHeight: "25vh",
    link: "https://github.com/youngconnorr/python-stock-analyzer",
  },
  {
    id: 6,
    name: "Advizr",
    description:
      "A lightweight AI academic advisor for university students developed through using Cohere's LLM for retrieval augmented generation (RAG). Allowing for deterministic responses, so it always points students in the right direction. Created during Hack the North 2024 and in the process of being fully developed by me and my team.",
    img: advizrPhoto,
    imgWidth: "15vw",
    imgHeight: "20vh",
    link: "https://devpost.com/software/advizr",
  },
  {
    id: 7,
    name: "Moodify",
    description:
      "An app that curates Spotify playlists by analyzing mood, photos, weather, and time, leveraging OpenAI and Spotify APIs to recommend music based on user input. Engineered with a dynamic React Native UI with Expo to create an immersive user experience!",
    img: moodifyPhoto,
    imgWidth: "15vw",
    imgHeight: "23vh",
    link: "hhttps://devpost.com/software/moodify-e7go5a",
  },
];
