import { useEffect } from "react";
import { ExperienceJSON } from "../../tools/ExperienceJSON";

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
      <h1 className="title hidden4">Experience</h1>

      <section className="experience-section">
        {ExperienceJSON.map((job) => (
          <div key={job.id} className="single-job hidden">
            <div className="role-title">
              <h2 className="role">{job.employer} </h2>
              {/* <h3 className="employer"> — {job.role}</h3> */}
            </div>
            <p className="languages">Software: {job.languages}</p>
            <h3 className="description">{job.description}</h3>
            {job.id === ExperienceJSON.length ? null : (
              <div className="vertical-line"></div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;
