import "./App.css";

function App() {
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
            <h3>&lt; / &gt; </h3>
          </section>
        </div>
      </section>

      <section className="description-section">
        <div>University of British Columbia</div>
        <p>Degree — Computer Science</p>
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
