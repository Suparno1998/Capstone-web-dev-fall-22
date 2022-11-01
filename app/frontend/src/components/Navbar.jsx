import React from "react";
import {useLogout} from '../utils/useLogout.js'
import {useAuthContext} from '../utils/AuthContext.js'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import { useNavigate } from "react-router";

function Navbar(props) {
  const navRef = useRef();
  const navigate = useNavigate()
  const {user} = useAuthContext();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const {logout} = useLogout()
  const handleLogout = ()=>{
    logout()
    navigate('/')
  }
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
          <a href="/home">Home</a>
          <a href="/mealplans">Plans</a>
          <a href="/recipes">Recipes</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/about-us">About Us</a>
          {user ? 
            <span>
              <a>Hello, {user.email}</a>{" "}
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </span>
            :
            <a href="#" onClick={props.handleOpen}>
              Login / Register
            </a>
          }
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars style={{color:"#28a745"}} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
