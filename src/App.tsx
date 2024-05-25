import "./App.css";
import { projects } from "./tools/Projects";

function App() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-section-1">
          <section className="intro-name">
            <h1>Connor Young</h1>
            <div className="intro-links">
              <h3 className="link">Github</h3>
              <h3 className="link">LinkedIn</h3>
              <h3 className="link">Email</h3>
            </div>
          </section>
        </div>
        <div className="intro-section-2">
          <h2 className="project-section-name">Projects</h2>
          <span className="project-list">
            {projects.map((project) => (
              <p key={project.id}>{project.name}</p>
            ))}
          </span>
        </div>
      </section>

      <section className="description-section">
        <div>Education</div>
        <div>Working on</div>
      </section>

      <section className="project-section">
        <div>Projects:</div>
        <div>Display projects</div>
      </section>
    </>
  );
}

export default App;
