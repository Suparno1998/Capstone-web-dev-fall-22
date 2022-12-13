import React, { useState } from "react";
import { useLogout } from "../utils/useLogout.js";
import { useAuthContext } from "../utils/AuthContext.js";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Login from "./Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "../components/Register.jsx";
import "../styles/main.css";
import RegisteredUsers from "./RegisteredUsers/RegisteredUsers.jsx";
import { useCart } from "react-use-cart";

function Navbar(props) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const navRef = useRef();
  const { user } = useAuthContext();
  const { totalUniqueItems } = useCart();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  function handleOpen() {
    console.log("hi");
    setIsLoginModalOpen(true);
  }
  function handleClose() {
    setIsLoginModalOpen(false);
  }
  const { logout } = useLogout();
  const handleLogout = () => {
    window.location.href = "/";
    logout();
  };

  const openRegister = () => {
    console.log("open register");
    setActiveTab("register");
  };

  const openLogin = () => {
    console.log("open login");
    setActiveTab("login");
  };
  return (
    <header>
      <div className="container topbar">
        <a href="/">
          <img
            width={170}
            src="/images/foodlabLogonew.png"
            alt="Food Lab Logo"
          />
        </a>
        <h3></h3>
        <nav ref={navRef}>
          {!user ? <a href="/">Home</a> : <></>}
          {user && user.firstname === "" ? <a href="/home">Home</a> : <></>}
          {user && user.firstname ? (
            <a href="/home">{user.firstname}'s Home</a>
          ) : (
            <></>
          )}
          {user && user.role === "admin" ? (
            <a href="/admin-home">Admin Panel</a>
          ) : (
            <></>
          )}
          {user && user.role === "admin" ? (
            <a href="/registeredusers"> Users</a>
          ) : (
            <></>
          )}
          {/* {user && user.role === "admin" ? (
            <></>
          ) : (
            <a href="/mealplan">Meal Plans</a>
          )} */}

          {/* {user && user.role === "admin" ? (
            <a href="/admin-mealplan">Admin Meal Plan</a>
          ) : (
            <></>
          )} */}

          {user && user.role === "admin" ? (
            <a href="/subscribers">Subscribers</a>
          ) : (
            <></>
          )}
          <a href="/mealplan">Meal Plans</a>
          {/* <a href="/contact-us">Contact Us</a>
          <a href="/aboutus">About Us</a> */}
          {user && user.role === "admin" ? (
            <></>
          ) : (
            <a href="/contact-us">Contact Us</a>
          )}
          {user && user.role === "admin" ? (
            <></>
          ) : (
            <a href="/aboutus">About Us</a>
          )}
          <a href="/cart">Cart({totalUniqueItems})</a>
          <a href="/mealdetail">Meal Plan Detail</a>

          {user && user.role === "admin" ? <></> : <a href="/cart">Cart</a>}
          {user ? (
            <span>
              <a href="user-profile">Profile</a>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </span>
          ) : (
            <a href="#" onClick={handleOpen}>
              Login / Register
            </a>
          )}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars style={{ color: "#28a745" }} />
        </button>
      </div>
      <Modal show={isLoginModalOpen} onHide={handleClose}>
        <Modal.Body className="p-0">
          <Tabs
            activeKey={activeTab}
            id="uncontrolled-tab-example"
            className="mb-3"
            fill
            onSelect={(k) => setActiveTab(k)}
          >
            <Tab eventKey="login" title="Login">
              <Login
                handleClose={handleClose}
                openFunction={openRegister}
              ></Login>
            </Tab>
            <Tab eventKey="register" title="Register">
              <Register
                handleClose={handleClose}
                openFunction={openLogin}
              ></Register>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </header>
  );
}

export default Navbar;
