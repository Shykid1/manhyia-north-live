import Searchbar from "../Searchbar";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const location = useLocation();

  if (
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/results" ||
    location.pathname === "/dashboard/agent-info" ||
    location.pathname === "/dashboard/presidential" ||
    location.pathname === "/dashboard/paliamentary"
  ) {
    return null;
  }

  return (
    <>
      <Searchbar />
      <nav className="navbars">
        <div className="logo">
          <img src="logo.png" alt="logo" />
          <p className="logo-text">MANHYIA NORTH LIVE</p>
        </div>
        <div className="menu-icon" onClick={handleToggleNavbar}>
          <IoMenu />
        </div>
        <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
          <NavLink className="elements" to="/" onClick={handleToggleNavbar}>
            Home
          </NavLink>
          <NavLink
            className="elements"
            to="/dashboard"
            onClick={handleToggleNavbar}
          >
            Dashboard
          </NavLink>
          <NavLink
            className="elements"
            to="/login"
            onClick={handleToggleNavbar}
          >
            Login
          </NavLink>
          <NavLink
            className="elements"
            to="/presidential"
            onClick={handleToggleNavbar}
          >
            Presidential
          </NavLink>
          <NavLink
            className="elements"
            to="/paliamentary"
            onClick={handleToggleNavbar}
          >
            Paliamentary
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
