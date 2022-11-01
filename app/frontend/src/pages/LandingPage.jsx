import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Navbar from "../components/Navbar.jsx";
import HeroHomePage from "../components/HeroHomePage.jsx";
import Newsletter from "../components/Newletter.jsx";
import Footer from "../components/Footer.jsx";
import Modal from "react-bootstrap/Modal";

import Login from "../components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "../components/Register.jsx";
export default function LandingPage(){
  const message = window.location.search === "" ? "" : window.location.search.replace("?","").split("=")[1]
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  function handleOpen() {
    console.log("hi");
    setIsLoginModalOpen(true)
  }
  function handleClose() {
   setIsLoginModalOpen(false)
  }
  useEffect(()=>{
    console.log(message)
    if(message === "verified"){
      console.log('works')
      alert("Your email was verified successfully. Please login to continue")
    }
  },[])
  return (
      <div>
        <Navbar
          handleOpen={handleOpen}
          handleClose={handleClose}
        ></Navbar>
        {/* <h2>Hello, world!</h2>
                    <h1>Hello, {this.state.team.join(", ")}</h1> */}
        <HeroHomePage />
        <Newsletter />
        <Footer />
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
      </div>
    );
}

