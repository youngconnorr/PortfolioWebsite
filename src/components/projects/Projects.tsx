import { projectJSON } from "../../tools/ProjectJSON";
import { useEffect, useRef } from "react";

const Projects = () => {
  const projectRefs = useRef<(HTMLElement | null)[]>([]);

  //prettier-ignore
  const colors = [
      "#C6DEF1", "#C9E4DE", "#F2C6DE", "#DBCDF0", // Original cool pastels
      "#AFCBFA", "#BEE8D9", "#E8B3C9", "#CABDEA", // Light blues, greens, pinks, purples
      // "#B8D8F2", "#D2ECE2", "#F5AFC4", "#D8C4F2", // More blues, teals, muted pinks
      "#98C1E6", "#A8D5BA", "#EBBAD3", "#C0AFE5", // Soft blue, green, pink, and purple mix
      "#87C5A4", "#DA92A8", "#A897D6", // Deeper blues, teals, pinks, and purples
      "#B4D4F2", "#B6E2DA", "#D3B6E2", "#E4B8D9", "#C4B9E8", "#9BC7E8" // Final subtle shades
  ];

  useEffect(() => {
    // Apply random background colors to each project
    projectRefs.current.forEach((box) => {
      if (!box) return; // Ensure box exists

      box.style.backgroundColor = "#FFFFFF";

      const handleMouseEnter = () => {
        box.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
      };

      const handleMouseLeave = () => {
        box.style.backgroundColor = "#FFFFFF"; // Restore original color
      };

      box.addEventListener("mouseenter", handleMouseEnter);
      box.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        box.removeEventListener("mouseenter", handleMouseEnter);
        box.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".hidden, .img-hidden, .hidden2, .hidden3, .hidden4"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section>
      <div>
        <h1 className="project-title hidden4">Projects</h1>
      </div>
      <div className="map-projects">
        {projectJSON
          .map((project, index) => (
            <div key={project.id}>
              <section
                ref={(el) => (projectRefs.current[index] = el)}
                className={`single-project ${
                  project.id % 2 === 0 ? "hidden" : "hidden2"
                }`}
              >
                <div className="project-parent-div">
                  <h2 className="project-name">{project.name}</h2>
                  <div className="description-project">
                    <div>
                      <b
                        className="check-out-button project-name"
                        onClick={() => window.open(project.link, "_blank")}
                        style={{ cursor: "pointer" }}
                      >
                        Check out project
                      </b>
                      <p className="text-section">{project.description}</p>
                    </div>
                    {project.id === 4 ? (
                      <iframe
                        width="300"
                        height="200"
                        src="https://www.youtube.com/embed/GLxtQhVK0mY"
                      />
                    ) : project.id === 2 ? (
                      <iframe
                        width="300"
                        height="200"
                        src="https://www.youtube.com/embed/vRYXmYW1e4c"
                      />
                    ) : (
                      <img
                        className="project-image img-"
                        src={project.img}
                        style={{
                          width: project.imgWidth,
                          height: project.imgHeight,
                        }}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </section>
            </div>
          ))
          .reverse()}
      </div>
    </section>
  );
};

export default Projects;
