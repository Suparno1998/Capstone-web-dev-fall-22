import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";

function Navbar(props) {
  const navRef = useRef();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") ? localStorage.getItem("loggedIn") : false
  );
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("email") ? localStorage.getItem("email") : ""
  );
  useEffect(() => {
    let logInStatus = localStorage.getItem("loggedIn");
    if (logInStatus) {
      setLoggedIn(true);
      setUserEmail(localStorage.getItem("email"));
    }
  });
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUserEmail("");
  };

  return (
    <header>
      <div className="container topbar">
        <a href="/#">
          <img
            width={170}
            src="/images/foodlabLogonew.png"
            alt="Food Lab Logo"
          />
        </a>
        <h3></h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Plans</a>
          <a href="/#">Recipes</a>
          <a href="/#">Contact Us</a>
          <a href="/#">Contact Us</a>
          {loggedIn ? (
            <span>
              <a>Hello, {userEmail}</a>{" "}
              <a href="#" onClick={logout}>
                Logout
              </a>
            </span>
          ) : (
            <a href="#" onClick={props.handleOpen}>
              Login / Register
            </a>
          )}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
