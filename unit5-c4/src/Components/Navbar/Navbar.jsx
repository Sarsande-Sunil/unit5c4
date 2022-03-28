import { Link } from "react-router-dom";
import { Style } from "../../styling/navbarstyle";
export const Navbar = () => {
  return (
    <Style>
      <div className="navbar">
        <Link className="navbarLoginSignUp" to={"/loginsignup"}>
          Login/Sign Up
        </Link>
        <Link className="navbarLoginSignUp" to={"/meetup"}>
          meetup
        </Link>
        <Link className="navbarLoginSignUp" to={"/event"}>
          event
        </Link>
        <Link className="navbarLoginSignUp" to={"/404"}>
          NotFound
        </Link>
      </div>
    </Style>
  );
};
