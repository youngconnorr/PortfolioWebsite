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

export const projects: Project[] = [
  {
    id: 1,
    name: "Photography Portfolio",
    description:
      "Designed a responsive front-end web application with React and CSS for optimal display across various screen sizes, integrated client-side routing with React Router for seamless navigation, and implemented a JSON storage database to optimize data management efficiency and enhance storage flexibility.",
    img: photoWebsite,
    imgWidth: "35vw",
    imgHeight: "30vh",
    link: "https://cyoungphotos.netlify.app",
  },
  {
    id: 2,
    name: "Liftify",
    description:
      "Assembled a comprehensive Java application to log exercises across various workout categories, enhancing user convenience and data organization. Constructed a dynamic GUI using Java Swing to optimize user interactions and overall usability. Developed a Java algorithm to intelligently filter workout data based on user input and provide insightful analysis, and built a robust JSON data storage mechanism for efficient data retrieval and management.",
    img: liftify,
    imgWidth: "30vw",
    imgHeight: "35vh",
    link: "https://github.com/youngconnorr/Liftify",
  },
  {
    id: 3,
    name: "MindFit",
    description:
      "Programmed an interactive React app with omnichannel features to integrate personalized exercise and meditation into students’ schedules. Led a team of new developers, mentoring them in React and using Firebase for user preferences, login streaks, and authentication.Achieved an honorable mention at the YouCode 2024 Hackathon, competing against 200 participants.",
    img: mindfit,
    imgWidth: "35vw",
    imgHeight: "30vh",
    link: "https://devpost.com/software/mindfit-m9gb38",
  },
  {
    id: 4,
    name: "PathFinder",
    description:
      "Developed an intelligent itinerary planning web application utilizing the OpenAI API for personalized travel plans across 4000+ cities. Engineered a PostgreSQL Realtime Database with Django, incorporating a RESTful API and CRUD operations for seamless itinerary management. Designed a responsive UI with React, enhancing user experience through advanced routing, state management, and CSS. Optimized data handling with a streamlined algorithm for 90% faster JSON parsing, improving data storage and retrieval efficiency.",
    img: mindfit,
    imgWidth: "35vw",
    imgHeight: "30vh",
    link: "https://github.com/youngconnorr/PathFinder",
  },
  {
    id: 5,
    name: "Stock Scout",
    description:
      "Designed an object-oriented Python app to monitor real-time stock market data, providing users with accurate information to make informed investment decisions. Built with python, pandas, and Yahoo Finance API, visualizing stock value through matplotlib. Focused on implementing CI/CD pipelines through GitHub Actions and Ubuntu and following a SDLC with pytest to streamline and automate the development and deployment processes. Achieved 100% code coverage in PyTest",
    img: stockAnalyzer,
    imgWidth: "35vw",
    imgHeight: "30vh",
    link: "https://github.com/youngconnorr/python-stock-analyzer",
  },
];
