import "./../App.css";
import { Link } from "react-router-dom";
import homeImg from "./../assets/home-icon.png";

function Navbar() {
  return (
    <>
      <div className="navBar">
        <Link to={"/"}>
          {" "}
          <img src={homeImg} alt="home icon" />
        </Link>
      </div>
    </>
  );
}

export default Navbar;
