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
      <section className="intro-section beige">
        <div className="intro-section-1">
          <section className="intro-name">
            <h1 className="typing-container">Connor Young</h1>
            <div className="intro-links">
              <h3 className="link">
                <a href="https://github.com/youngconnorr">Github</a>
              </h3>
              <h3 className="link">
                <a href="www.linkedin.com/in/connor-youngg">LinkedIn</a>
              </h3>
              <h3 className="link">
                <a href="mailto:youngconnorr@gmail.com">Email</a>
              </h3>
            </div>
            <h3 className="link">&lt; / &gt; </h3>
          </section>
        </div>
      </section>

      <div className="spacer layer1"></div>

      <section style={{ height: "50vh" }} className="light-green">
        <section className="school-section">
          <div className="school-part-of-section">
            <section className="description-section hidden">
              <section className="hidden">
                <h2>University of British Columbia</h2>
                <p>Degree — Computer Science</p>
                <p>GPA — 3.85</p>
              </section>
            </section>
          </div>

          <section className="working-on-section hidden">
            <h2>Current working on</h2>
            <section className="text-section2">
              <h3>Path Finder</h3>
              <p className="hidden">
                A web application that helps uses AI to easily plan your travel
                itinerary!
              </p>
              <p className="hidden">
                Tailored Itineraries: Utilizing the OpenAI API, Travel Planner
                generates customized itineraries based on your destination and
                the month of your travel. Get recommendations on places to
                visit, restaurants to dine at, and clothing to pack, all curated
                for the specific month you're traveling.
              </p>
            </section>
          </section>
        </section>

        <h2 className="center hidden">Parts of my life:</h2>
        <section className=" interested-section">
          <div className="interested-buttons hidden">
            <p className="interested">Innovative Tech</p>
            <p className="interested">Fullstack Development</p>
            <p className="interested">Volleyball</p>
            <p className="interested">Bouldering</p>
            <p className="interested">Good Music</p>
          </div>
        </section>
      </section>

      <div className="spacer layer2"></div>

      <section className="dark-green font-white">
        <div className="projects-section">
          <h2 className="project-title hidden">Projects</h2>
          <div
            style={{
              borderTop: "1px solid white",
              width: "900px",
              marginLeft: "10px",
            }}
          ></div>
          <div className="map-projects">
            <div>
              {projects.map((project) => (
                <div>
                  <section className="single-project hidden">
                    <div key={project.id}>
                      <h3>{project.name}</h3>
                      <div className="description-project">
                        <div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <b>Check out project</b>
                          </a>
                          <p className="text-section">{project.description}</p>
                        </div>
                        <img
                          id="project-picture"
                          src={project.img}
                          style={{
                            width: `${project.imgWidth}`,
                            height: `${project.imgHeight}`,
                          }}
                          alt=""
                          className="school-img hidden"
                        />
                      </div>
                      {/* <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <b>Check out project</b>
                    </a> */}
                    </div>
                  </section>
                  {project.id === projects.length ? null : (
                    <div className="vertical-line"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
