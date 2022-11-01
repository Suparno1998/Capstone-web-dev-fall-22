import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Modal } from "react-bootstrap";
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import VerifyEmail from "./pages/verifyEmail.jsx";
import MealPlan from './pages/MealPlan/Mealplan.jsx'
import AboutUs from './pages/aboutus/AboutUs.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import UserProfile from './pages/UserProfile/UserProfile.jsx'
import Admin from "./pages/admin/Admin.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {FaCalculator} from 'react-icons/fa';
import BMIComponent from "./pages/Bmi/bmi.jsx";
import { AuthContextProvider } from "./utils/AuthContext.js";

export default function App(){
  const [bmiModal, setBMIModal] = useState(false)
  const handleOpen = ()=>{
    setBMIModal(true)
  }
  const handleClose = ()=>{
    setBMIModal(false)
  }
  return <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/verify" exact element={<VerifyEmail/>}></Route>
          <Route path="/mealplan" element={<MealPlan />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
    <button className="btn btn-success floating-button" onClick={handleOpen} ><FaCalculator></FaCalculator></button>
    <Modal show={bmiModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>BMI Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BMIComponent/>
        </Modal.Body>
      </Modal>
    <Footer></Footer>
    
  </div>
}

const element = document.getElementById("app");
const root = createRoot(element);
root.render(<AuthContextProvider><App/></AuthContextProvider>);
