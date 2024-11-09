import { projectJSON } from "../../tools/ProjectJSON";
import { useEffect } from "react";

const Projects = () => {
  // const colorBox = document.querySelector(".single-project") as HTMLElement;
  // const colors = [
  //   "#C6DEF1",
  //   "#FAEDCB",
  //   "#C9E4DE",
  //   "#F7D9C4",
  //   "#F2C6DE",
  //   "#DBCDF0",
  // ];

  // if (colorBox) {
  //   colorBox.addEventListener("mouseenter", () => {
  //     const randomColor = colors[Math.floor(Math.random() * colors.length)];
  //     colorBox.style.backgroundColor = randomColor;
  //   });
  // }

  // if (colorBox) {
  //   colorBox.addEventListener("mouseleave", () => {
  //     colorBox.style.backgroundColor = "";
  //   });
  // }

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

    const hiddenElements = document.querySelectorAll(
      ".hidden, .img-hidden, .hidden2, .hidden3, .hidden4"
    );
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className=" ">
      <div>
        <h1 className="project-title hidden4">Projects</h1>
      </div>
      <div className="map-projects">
        {projectJSON
          .map((project) => (
            <div key={project.id}>
              <section
                className={`single-project ${
                  project.id % 2 === 0 ? "hidden2" : "hidden"
                }`}
              >
                <div key={project.id} className="project-parent-div">
                  <h2 className=" project-name">{project.name}</h2>
                  <div className="description-project ">
                    <div>
                      <div className=" ">
                        <b
                          className="check-out-button project-name"
                          onClick={() => window.open(project.link, "_blank")}
                          style={{ cursor: "pointer" }}
                        >
                          Check out project
                        </b>
                      </div>
                      <p className="text-section ">{project.description}</p>
                    </div>
                    {project.id === 4 ? (
                      <iframe
                        className="project-image img-"
                        width="420"
                        height="315"
                        src="https://www.youtube.com/embed/GLxtQhVK0mY"
                        title="PathFinder Tutorial Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : null}
                    {project.id === 2 ? (
                      <iframe
                        className="project-image img-"
                        width="420"
                        height="315"
                        src="https://www.youtube.com/embed/vRYXmYW1e4c"
                        title="Liftify Tutorial Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : null}
                    {project.id !== 2 && project.id !== 4 ? (
                      <img
                        className="project-image img-"
                        id="project-picture"
                        src={project.img}
                        style={{
                          width: `${project.imgWidth}`,
                          height: `${project.imgHeight}`,
                        }}
                        alt=""
                      />
                    ) : null}
                  </div>
                </div>
              </section>
              {project.id + projectJSON.length - 1 ===
              projectJSON.length ? null : (
                <div className="vertical-line"></div>
              )}
            </div>
          ))
          .reverse()}
      </div>
    </section>
  );
};

export default Projects;
