/*

Application updates needed:
- Make a toggle showing experience and projects
- Make a panel show up when you hover over the interest buttons
- Fix phone responsiveness 
- Make a go to the top button

*/

import "./index.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import { Routes, Route } from "react-router-dom";
// import { projects } from "./tools/Projects";
// import PFP from "./tools/DSCF2156.jpeg";
// import PDF from "./tools/public_resume.pdf";

function App() {
  // const [showExperience, setShowExperience] = useState<boolean>(true);
  const location = useLocation();

  const isProfile = location.pathname === "/";

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // console.log(entry + "added to show");
        }
        //  else {
        //   entry.target.classList.remove("show");
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden, .img-hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {isProfile ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
