import React, { Fragment, useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {
    Navbar, Nav, NavItem, NavDropdown,
    MenuItem, Glyphicon, Tooltip, OverlayTrigger,
  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import UserProfile from "./UserProfile/UserProfile.js";
import "../styles/main.css";

function Navigation(props) {
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
    <Fragment>
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
          <a href="/#">About Us</a>

          {loggedIn ? (
            <span>
              <a>Hello, {userEmail}</a>{" "}
              <a href="#" onClick={logout}>
                Logout
              </a>

            </span>
          ) : (
            <Fragment>
              <a href="#" onClick={props.handleOpen}>
                Login / Register
              </a>
            </Fragment>
          )}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars style={{ color: "#28a745" }} />
        </button>
        
      </div>
    </header>
   {/*  <div>
      <Router>
            <Navbar>
                <Nav>
                    <LinkContainer to="/user-profile">
                        <NavItem>Profile</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <Routes>
                <Route path="/user-profile" element={<UserProfile/>} />
            </Routes>
        </Router>
    </div> */}
    </Fragment>
  );
}

export default Navigation;
