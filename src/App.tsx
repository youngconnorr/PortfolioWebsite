import "./App.css";
import { useEffect } from "react";
import ubc from "./tools/ubc-logo-png-transparent.png";
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <section className="intro-section">
        <div className="intro-section-1">
          <section className="intro-name">
            <h1 className="typing-container">Connor Young</h1>
            <div className="intro-links">
              <h3 className="link">Github</h3>
              <h3 className="link">LinkedIn</h3>
              <h3 className="link">Email</h3>
            </div>
            <h3 className="link">&lt; / &gt; </h3>
          </section>
        </div>
      </section>

      <section className="school-section">
        <section className="description-section hidden">
          <section className="hidden">
            <h2>University of British Columbia</h2>
            <p>Degree — Computer Science</p>
            <p>GPA — 3.85 / 4.33</p>
          </section>
          <img
            src={ubc}
            alt=""
            width="180"
            height="180"
            className="school-img hidden"
          />
        </section>

        <section className="activity hidden">
          <section className="text-section">
            <h3>Youcode 2024 Hackathon</h3>
            <p className="text-box">
              Created an interactive website that helps busy students improve
              their health by recommending workouts and breathing exercises
              according to their schedule.
            </p>
            <p className="text-box">
              Achived an honorable mention for our project
            </p>
            <button>See DevPost</button>
          </section>

          <h3>Hack The North 2024 Hackathon</h3>
          <p>Upcoming event</p>
        </section>
      </section>

      <section className="working-on-section hidden">
        <h2>Working on</h2>
      </section>

      <section className="project-section hidden">
        <h2>Projects:</h2>
        <div>Display projects</div>
      </section>
    </>
  );
}

export default App;
