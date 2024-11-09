import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="go-back hidden">
      <Link to="/" className="link-go-back">
        <div className="back-button-arrow">
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/windows/32/long-arrow-left.png"
            alt="long-arrow-left"
            style={{ transform: "translateY(20%)" }}
          />{" "}
        </div>
        Go back
      </Link>
    </div>
  );
};

export default Navbar;
