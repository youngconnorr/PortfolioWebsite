import { useEffect } from "react";
import { VolunteeringJSON } from "./VolunteeringJSON";
import { handleGlowMove, glowColorRef, useRandomGlowColors } from "../../utils/glow";

const Volunteering = () => {
  const itemGlows = useRandomGlowColors(VolunteeringJSON.length);

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
    <>
      <div>
        <h1 className="volunteering-title hidden4">Volunteering</h1>
        <h2 className="volunteering-subtitle">Helping & Contributing</h2>
      </div>

      <section className="volunteering-section">
        {[...VolunteeringJSON].reverse().map((item, index) => (
          <div
            key={item.id}
            className="single-volunteer hidden glow-surface glow-volunteering"
            onMouseMove={handleGlowMove}
            ref={glowColorRef(itemGlows[index])}
          >
            <div>
              <h2 className="role">{item.employer}</h2>
            </div>
            <div className="role-title">
              <h3 className="employer">{item.role} {item.link.length > 0 ? <>| <a href={item.link} target="_blank" style={{color: '#0077b6'}} rel="noopener noreferrer">Learn More</a></> : null}</h3>
            </div>
            <div>
              <h3 className="description">{item.description}</h3>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Volunteering;
