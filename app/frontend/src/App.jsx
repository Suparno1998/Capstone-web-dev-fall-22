import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import VerifyEmail from "./pages/verifyEmail.jsx";
import MealPlan from "./pages/MealPlan/Mealplan.jsx";
import AboutUs from "./pages/aboutus/AboutUs.jsx";
import Cart from "./pages/cart/cart.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { FaCalculator } from "react-icons/fa";
import BMIComponent from "./pages/Bmi/bmi.jsx";
import { AuthContextProvider } from "./utils/AuthContext.js";
import { useAuthContext } from "./utils/AuthContext.js";
import IncorrectAccess from "./pages/IncorrectAccess.jsx";
import AdminMealPlan from "./pages/admin/adminPages/AdminMealplan/AdminMealPlan.jsx";
import ResendVerification from "./pages/ResendVerification.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import NewsletterSubscribers from "./components/NewsletterSubscribers/NewsletterSubscribers.jsx";
import RegisteredUsers from "./components/RegisteredUsers/RegisteredUsers.jsx";
import AdminDashboard from "./pages/admin/adminPages/AdminDashboard/AdminDashboard.jsx";
import AdminSlide from "./pages/admin/adminPages/AdminOrders/AdminOrders.jsx";
import ListOfUsers from "./pages/admin/adminPages/ListOfUsers/ListOfUsers.jsx";
import ContactMessages from "./pages/admin/adminPages/ContactMessages/ContactMessages.jsx";
import MealPlanDetail from "./pages/MealPlanDetail/MealPlanDetail.jsx";
export default function App() {
  const [bmiModal, setBMIModal] = useState(false);
  const { user } = useAuthContext();
  console.log(user);
  const handleOpen = () => {
    setBMIModal(true);
  };
  const handleClose = () => {
    setBMIModal(false);
  };
  const tempfunc = () => {
    console.log("state : ", user);
    return user ? <HomePage /> : <IncorrectAccess />;
  };
  return (
    <div>
      <Navbar></Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/admin-home" element={user && user.role === "admin" ? <Admin/> : <IncorrectAccess/>} />
          <Route path="/admin-mealplan" element={user && user.role === "admin" ? <AdminMealPlan /> : <IncorrectAccess/>} />
          <Route path="/registered-users" element={user && user.role === "admin" ? <RegisteredUsers /> : <IncorrectAccess/>} />
          <Route path="/subscribers" element={user && user.role === "admin" ? <NewsletterSubscribers /> : <IncorrectAccess/>} />
          <Route path="/resend" element={<ResendVerification/>}></Route>
          <Route path="/forget" element={<ForgetPassword/>}></Route>
          <Route path="/reset" element={<ResetPassword/>}></Route>
          <Route path="/" element={user ? <HomePage/> : <LandingPage/>}></Route>
          <Route path="/home" element={user ? <HomePage/> : <IncorrectAccess/>}></Route>
          <Route path="/verify" exact element={<VerifyEmail/>}></Route>
          <Route path="/mealplan" element={<MealPlan />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/mealdetail" element={<MealPlanDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/user-profile"
            element={user ? <UserProfile /> : <IncorrectAccess />}
          />
        </Routes>
      </BrowserRouter>

      <button className="btn btn-success floating-button" onClick={handleOpen}>
        <FaCalculator></FaCalculator>
      </button>
      <Modal show={bmiModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>BMI Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BMIComponent />
        </Modal.Body>
      </Modal>
      {user && user.role === "admin" ? <></> : <Footer></Footer>}
    </div>
  )
}

const element = document.getElementById("app");
const root = createRoot(element);
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
