import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./cursor.css";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Hover state is recomputed from the event target on every move, rather
    // than tracked via mouseover/mouseout, because a Link click can unmount
    // the hovered element (SPA navigation) before a mouseout ever fires -
    // that used to leave the cursor stuck at its enlarged "hover" size.
    const handleMove = (e: MouseEvent) => {
      dot.style.setProperty("--cursor-x", `${e.clientX}px`);
      dot.style.setProperty("--cursor-y", `${e.clientY}px`);
      dot.classList.add("custom-cursor--visible");
      const isInteractive = !!(e.target as HTMLElement)?.closest?.(
        INTERACTIVE_SELECTOR
      );
      dot.classList.toggle("custom-cursor--hover", isInteractive);
    };

    const handleLeaveWindow = () => dot.classList.remove("custom-cursor--visible");

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, []);

  // Belt-and-suspenders: force the hover state to clear the instant the
  // route changes, so a click-triggered navigation never leaves the dot
  // enlarged while waiting for the next mousemove to correct it.
  useEffect(() => {
    dotRef.current?.classList.remove("custom-cursor--hover");
  }, [location.pathname]);

  return (
    <div className="custom-cursor" ref={dotRef}>
      <div className="custom-cursor-dot" />
    </div>
  );
};

export default CustomCursor;
