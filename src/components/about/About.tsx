import { useEffect } from "react";

const About = () => {
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
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title hidden4">About Me</h1>
      <h2 className="about-subtitle">Aspirations & Values</h2>

      {/* Who Am I Section */}
      <section className="about-section hidden">
        <h3 className="section-label">Who am I?</h3>
        <h2 className="section-heading">Hi! I'm Connor 🐶</h2>
        <div className="section-content">
          <p>
            I'm currently in my third year, pursuing a major in Cognitive Systems
            at the University of British Columbia.
          </p>
          <p>
            My love for technology came from the belief that innovation can empower
            people and solve real-world problems. I always strive to build
            something that could positively impact people's lives, whether
            that's through AI-powered tools, intuitive user experiences, or
            scalable systems that make a difference.
          </p>
          <p>
            My lifetime goal is to make a noticable impact on the world through my work. For now, I am continually 
            learning from my peers, colleagues, and mentors
            who push me to think bigger and dream bolder.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section hidden2">
        <h3 className="section-label">Values</h3>
        <h2 className="section-heading">My Principles</h2>
        <div className="values-grid">
          <div className="value-item">
            <h4 className="value-title">Innovation</h4>
            <p className="value-description">Pushing boundaries forward</p>
          </div>
          <div className="value-item">
            <h4 className="value-title">Social Good</h4>
            <p className="value-description">Tech that helps people</p>
          </div>
          <div className="value-item">
            <h4 className="value-title">Open Minded</h4>
            <p className="value-description">Embracing new perspectives</p>
          </div>
          <div className="value-item">
            <h4 className="value-title">Mentorship</h4>
            <p className="value-description">Growing through guidance</p>
          </div>
        </div>
      </section>

      {/* Currently Working On Section */}
      <section className="about-section hidden3">
        <h3 className="section-label">Current Focus</h3>
        <h2 className="section-heading">What I'm Building</h2>
        <div className="section-content">
          <p>
            I'm currently working on <strong>Coin Check</strong> — a machine
            learning model trained to predict the next candle of Bitcoin using
            PyTorch and historical price data.
          </p>
          <p>
            Outside of tech, you can find me competing in sports such as
            volleyball and bouldering, hiking up mountains with friends, or just
            listening to good music.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
