import React, {useState} from "react";
import {useLogout} from '../utils/useLogout.js'
import {useAuthContext} from '../utils/AuthContext.js'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer.jsx";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Login from "../components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "../components/Register.jsx";
import "../styles/main.css";

function Navbar(props) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const navRef = useRef();
  const {user} = useAuthContext();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  function handleOpen() {
    console.log("hi");
    setIsLoginModalOpen(true)
  }
  function handleClose() {
   setIsLoginModalOpen(false)
  }
  const {logout} = useLogout()
  const handleLogout = ()=>{
    logout()
    window.location.href="/"
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
          {user && user.role === "admin" ?  <a href="/admin/home">Admin Panel</a> : <></>}
          {user && user.role === "admin" ?  <a href="/admin/mealplan">Admin Meal Plan</a> : <></>}
          <a href="/home">Home</a>
          <a href="/mealplan">Plans</a>
          <a href="/recipes">Recipes</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/aboutus">About Us</a>
          {user ? 
            <span>
              <a>Hello, {user.email}</a>{" "}
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </span>
            :
            <a href="#" onClick={handleOpen}>
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
      <Modal show={isLoginModalOpen} onHide={handleClose}>
          <Modal.Body className="p-0">
            <Tabs
              defaultActiveKey="login"
              id="uncontrolled-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="login" title="Login">
                <Login handleClose={handleClose}></Login>
              </Tab>
              <Tab eventKey="register" title="Register">
                <Register handleClose={handleClose}></Register>
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
    </header>
  );
}

export default Navbar;
