import mindfit from "../../tools/mindfit.png";
import photoWebsite from "../../tools/photoWebsite.png";
import stockAnalyzer from "../../tools/stock_analyzer_photo.png";
import advizrPhoto from "../../tools/advizr-photo.png";
import moodifyPhoto from "../../tools/moodify-photo.png";
import pathfinder from "../../tools/pathfinder.png";

export interface Project {
  id: number;
  name: string;
  description: string;
  learningObjective: string;
  img: string;
  imgWidth: string;
  imgHeight: string;
  link: string;
}

export const projectJSON: Project[] = [
  {
    id: 1,
    name: "📸 Photography Portfolio",
    description:
      "A responsive React web application showcasing my personal photography portfolio with interactive image cycling.",
    learningObjective: "Learn React and CSS animations for interactive photo galleries.",
    img: photoWebsite,
    imgWidth: "26vw",
    imgHeight: "28vh",
    link: "https://cyoungphotos.netlify.app",
  },
  // {
  //   id: 2,
  //   name: "Liftify",
  //   description:
  //     "Assembled a Java application to log exercises across various workout categories, streamlining progress tracking. Constructed a dynamic GUI using Java Swing to optimize user interactions and overall usability.",
  //   img: liftify,
  //   imgWidth: "25w",
  //   imgHeight: "20vh",
  //   link: "https://github.com/youngconnorr/Liftify",
  // },
  {
    id: 3,
    name: "🧠 MindFit",
    description:
      "An interactive React app that integrates personalized exercise and meditation into students' daily schedules.",
    learningObjective: "Rapid prototyping and user-centered design under hackathon constraints.",
    img: mindfit,
    imgWidth: "30vw",
    imgHeight: "30vh",
    link: "https://devpost.com/software/mindfit-m9gb38",
  },
  {
    id: 4,
    name: "🗺️ PathFinder",
    description:
      "An intelligent itinerary planning web app using OpenAI API, React, and Django for personalized travel recommendations.",
    learningObjective: "End-to-end full-stack development with LLM API integration.",
    img: pathfinder,
    imgWidth: "35vw",
    imgHeight: "30vh",
    link: "https://github.com/youngconnorr/PathFinder",
  },
  {
    id: 5,
    name: "📈 Stock Scout",
    description:
      "A Python app that monitors real-time stock market data and visualizes trends using pandas and matplotlib.",
    learningObjective: "Data pipelines with pandas and financial data visualization.",
    img: stockAnalyzer,
    imgWidth: "25vw",
    imgHeight: "25vh",
    link: "https://github.com/youngconnorr/python-stock-analyzer",
  },
  {
    id: 6,
    name: "🧶 Threadly",
    description:
      "A concurrent job processor built with Go, Redis, and Docker featuring fault-tolerant worker pools and a React dashboard.",
    learningObjective: "Go concurrency, Redis job queues, and fault-tolerant system design.",
    img: moodifyPhoto,
    imgWidth: "15vw",
    imgHeight: "23vh",
    link: "https://github.com/youngconnorr/go-redis-jobqueue",
  },
  {
    id: 8,
    name: "🎓 Advizr",
    description:
      "A lightweight AI academic advisor using Cohere's LLM and RAG to provide reliable guidance for university students.",
    learningObjective: "RAG architecture and prompt engineering for reliable AI responses.",
    img: advizrPhoto,
    imgWidth: "15vw",
    imgHeight: "20vh",
    link: "https://connoryoung.notion.site/Advizr-2e230ab5aaf680d398abdd5592b37e87?pvs=74",
  },
  // {
  //   id: 7,
  //   name: "🎵 Moodify",
  //   description:
  //     "A React Native app that curates Spotify playlists by analyzing mood, photos, weather, and time using OpenAI.",
  //   learningObjective: "React Native mobile development and third-party API orchestration.",
  //   img: moodifyPhoto,
  //   imgWidth: "15vw",
  //   imgHeight: "23vh",
  //   link: "https://devpost.com/software/moodify-e7go5a",
  // },
  {
    id: 9,
    name: "💸 Market Note",
    description:
      "A real-time stock news aggregator with interactive price charts and a comprehensive earnings calendar for all US companies",
    learningObjective: "Build a production-ready fintech application with API integration, caching, and containerization.",
    img: moodifyPhoto,
    imgWidth: "15vw",
    imgHeight: "23vh",
    link: "https://connoryoung.notion.site/Stock-News-Project-2e230ab5aaf68011bfeccb7f72550dee?pvs=74",
  },
];
