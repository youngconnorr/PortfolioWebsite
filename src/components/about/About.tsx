import { useEffect } from "react";

const About = () => {
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
    <>
      <div>
        <h1 className="about hidden4">About me:</h1>
        <section className="school-section">
          <div className="me-section hidden">
            <h2>Hi I'm Connor!</h2>
            <p>
              I enjoy connecting with people, exploring new technology, and
              developing cool projects with a particular interest in fullstack
              development. Outside of tech - you can find me competing in sports
              such as volleyball and bouldering, hiking up mountains with
              friends, or just listening to good music 😄
            </p>
          </div>
          <div className="currently-working-on-section hidden2">
            <h2>
              I'm currently working on <b>Moodify</b>
            </h2>
            <a
              className="working-on-project"
              href="https://devpost.com/software/moodify-e7go5a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Check out Devpost</h3>
            </a>
            <p className="">
              An app that curates Spotify playlists by analyzing mood, photos,
              weather, and time, leveraging OpenAI and Spotify APIs to recommend
              music based on user input. Engineered with a dynamic React Native
              UI with Expo to create an immersive user experience!
            </p>
            <p className="">
              Created during NwHacks 2025 and in the process of being fully
              developed by me and my team.
            </p>
          </div>
        </section>
        {/* <section className="interests-section">
          <h2 className="center">Parts of my life</h2>
          <div className="interest-list">
            <div className="interested-buttons ">
              <p className="interested">Innovative Tech</p>
              <p className="interested">Full Stack Development</p>
              <p className="interested">Volleyball</p>
              <p className="interested">Bouldering</p>
              <p className="interested">Good Music</p>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default About;
