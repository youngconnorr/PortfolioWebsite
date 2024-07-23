import "./App.css";
import { useEffect } from "react";
import { projects } from "./tools/Projects";
import PFP from "./tools/DSCF2156.jpeg";
import PDF from "./tools/public_resume.pdf";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // console.log(entry + "added to show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden, .img-hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <section className="intro-section beige">
        <div className="intro-section-1">
          <section className="intro-name">
            <div className="name-section">
              <h1 className="typing-container">Connor Young</h1>
              <div className="intro-links">
                <h3 className="link">
                  <a
                    href="https://github.com/youngconnorr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </h3>
                <h3 className="link">
                  <a
                    href="https://www.linkedin.com/in/connor-youngg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </h3>
                <h3 className="link">
                  <a
                    href="mailto:conryoung4@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email
                  </a>
                </h3>
                <h3 className="link">
                  <a href={PDF} target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </h3>
              </div>
              <h3 className="link">&lt; / &gt; </h3>
            </div>
            <img src={PFP} alt="" width="400px" className="intro-img hidden" />
          </section>
        </div>
      </section>

      <div className="spacer layer1"></div>

      <section className="light-green grades-section">
        <div className="school-section">
          <h1 className="hidden about">About me:</h1>
          <div></div>

          <section className="school-part-of-section">
            <div className="description-section hidden">
              {/* <h2>University of British Columbia</h2>
              <img src={UBC} alt="ubc logo" height="100px" /> */}
              <h2>Hi I'm Connor!</h2>
              <p>I'm a software engineer from Calgary, Alberta.</p>
              <p>
                I’m a third year student at the University of British Columbia
                studying computer science. Looking for software engineer
                internships!
              </p>
              <p>
                I enjoy connectioning with people, exploring new technology, and
                developing cool projects with a particular interest in fullstack
                development. Outside of tech - you can find me competing in
                sports such as volleyball and bouldering, hiking up mountains
                with friends, or just listening to good music 😄
              </p>
            </div>
          </section>
          <section className="working-on-section hidden">
            <h2>I'm currently working on</h2>
            <section className="text-section2">
              <a
                className="pathfinder"
                href="https://github.com/youngconnorr/PathFinder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Stock Scout</h3>
              </a>
              <p className="hidden">
                Monitoring real-time stock market data, providing users with
                accurate information to make informed investments.
              </p>
              <p className="hidden">
                Using YFinance API, I am analyzing 1000+ stocks with{" "}
                <b>Python</b> and <b> Pandas</b> to create an application to
                retrieve intricate information and create a user portfolio. I am
                also learning the software development lifecycle <b>(SDLC)</b>{" "}
                and completing each step of the process using <b>PyTest</b> and{" "}
                <b>PyTest-cov</b>, <b>Github Action</b>, and <b>Docker</b>!
              </p>
            </section>
          </section>
          <div className="interests-section">
            <h2 className="center hidden" style={{ marginTop: "20px" }}>
              Parts of my life
            </h2>
            <section className="interest-list">
              <div className="interested-buttons hidden">
                <p className="interested">Innovative Tech</p>
                <p className="interested">Full Stack Development</p>
                <p className="interested">Volleyball</p>
                <p className="interested">Bouldering</p>
                <p className="interested">Good Music</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <div className="spacer layer2"></div>

      <section className="dark-green font-white ">
        <div className="projects-section">
          <div style={{ display: "flex" }}>
            <h2
              className="project-title hidden"
              style={{ marginRight: "30px" }}
            >
              Projects
            </h2>
          </div>
          <div className="divider"></div>
          <div className="map-projects">
            <div>
              {projects
                .map((project) => (
                  <div>
                    <section className="single-project">
                      <div key={project.id}>
                        <h3 className="hidden project-name">{project.name}</h3>
                        <div className="description-project hidden">
                          <div>
                            <div className=" hidden">
                              <b
                                className="check-out-button project-name"
                                onClick={() =>
                                  window.open(project.link, "_blank")
                                }
                                style={{ cursor: "pointer" }}
                              >
                                Check out project
                              </b>
                            </div>
                            <p className="text-section hidden">
                              {project.description}
                            </p>
                          </div>
                          {project.id === 4 ? (
                            <iframe
                              width="420"
                              height="315"
                              src="https://www.youtube.com/embed/GLxtQhVK0mY"
                              title="PathFinder Tutorial Video"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <img
                              className="project-image img-hidden"
                              id="project-picture"
                              src={project.img}
                              style={{
                                width: `${project.imgWidth}`,
                                height: `${project.imgHeight}`,
                              }}
                              alt=""
                            />
                          )}
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
                    {project.id + projects.length - 1 ===
                    projects.length ? null : (
                      <div className="vertical-line"></div>
                    )}
                  </div>
                ))
                .reverse()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
