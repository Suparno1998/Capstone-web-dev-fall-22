import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";

function Navbar(props) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div class="container topbar">
        <a href="">
          <img
            width={160}
            src="/images/foodlablogonew.png"
            alt="FoodLab Logo"
          />
        </a>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Plans</a>
          <a href="/#">Recipes</a>
          <a href="/#">Contact Us</a>
          <a href="/#" onClick={props.handleOpen}>
            Login / Register
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars style={{ color: "#28a745" }} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
