import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/main.css";

function Navigation(props) {
  const navRef = useRef();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") ? localStorage.getItem("loggedIn") : false
  );
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true" ? true : false
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
          <nav ref={navRef}>
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
            <NavLink to="/mealplan">
              <a>Meal Plan</a>
            </NavLink>
            <NavLink to="/contact-us">
              <a>Contact Us</a>
            </NavLink>
            <NavLink to="/aboutus">
              <a>AboutUs</a>
            </NavLink>
            {/* <a href="/#">Home</a>
          <a href="/#">Meal Plans</a>
          <a href="/#">Recipes</a>
          <a href="/#">Contact Us</a>
          <a href="/#">About Us</a> */}

            {loggedIn ? (
              <span>
                {/* <a>Hello, {userEmail}</a>{" "} */}
                <NavLink to="/user-profile">
                  <a>Profile</a>
                </NavLink>
                <a href="#" onClick={logout}>
                  Logout
                </a>
              </span>
            ) : (
              <Fragment>
                <a href="#" onClick={props.handleOpen}>
                  Login / Register
                </a>
                <NavLink to="/user-profile">
                  <a>Profile</a>
                </NavLink>
              </Fragment>
            )}
            {/* {isAdmin ?  <>is a admin</> : <>is a user</> } */}
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
