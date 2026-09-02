import { useEffect } from "react";
import { ExperienceJSON } from "./ExperienceJSON";
import { handleGlowMove, glowColorRef, useRandomGlowColors } from "../../utils/glow";

const Experience = () => {
  const jobGlows = useRandomGlowColors(ExperienceJSON.length);

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
        <h1 className="experience-title hidden4">Experience</h1>
        <h2 className="experience-subtitle">Scaling & Engineering</h2>
      </div>

      <section className="experience-section">
        {[...ExperienceJSON].reverse().map((job, index) => (
          <div
            key={job.id}
            className="single-job hidden glow-surface glow-experience"
            onMouseMove={handleGlowMove}
            ref={glowColorRef(jobGlows[index])}
          >
            <div className="role-title">
              <h2 className="role">{job.employer} </h2>
            </div>
            <div>
              <h3 className="employer">{job.role}</h3>
            </div>
            {/* <div>
            <p className="languages">{job.languages}</p>
            </div> */}
            <div>
            <h3 className="description">{job.description}</h3>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;
