import { useEffect } from "react";
import { ExperienceJSON } from "./ExperienceJSON";

const Experience = () => {
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
        {[...ExperienceJSON].reverse().map((job) => (
          <div key={job.id} className="single-job hidden">
            <div className="role-title">
              <h2 className="role">{job.role} </h2>
            </div>
            <div>
              <h3 className="employer">{job.employer}</h3>
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
