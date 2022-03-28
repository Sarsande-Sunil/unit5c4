import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
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
  );
};
