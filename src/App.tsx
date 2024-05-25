import "./App.css";
import { useEffect } from "react";
import { projects } from "./tools/Projects";
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
        <div className="school-part-of-section">
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
        </div>

        <section className="working-on-section hidden">
          <h2>Current working on</h2>
          <section className="text-section2">
            <h3>Path Finder</h3>
            <p>
              A web application that helps uses AI to easily plan your travel
              itinerary!
            </p>
            <p>
              Tailored Itineraries: Utilizing the OpenAI API, Travel Planner
              generates customized itineraries based on your destination and the
              month of your travel. Get recommendations on places to visit,
              restaurants to dine at, and clothing to pack, all curated for the
              specific month you're traveling.
            </p>
          </section>
        </section>
      </section>
      <div></div>
      <section className="map-projects">
        <h2>Projects</h2>
        <div></div>
        {projects.map((project) => (
          <section className="single-project">
            <div key={project.id}>
              <h3>{project.name}</h3>
              <p className="text-section">{project.description}</p>
              <img
                src={project.img}
                alt=""
                width="180"
                height="180"
                className="school-img hidden"
              />
              <button>
                {" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out project
                </a>
              </button>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default App;
