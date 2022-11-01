import React from "react";
import { createRoot } from "react-dom/client";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import VerifyEmail from "./pages/verifyEmail.jsx";
import MealPlan from './pages/MealPlan/Mealplan.jsx'
import AboutUs from './pages/aboutus/AboutUs.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import UserProfile from './pages/UserProfile/UserProfile.jsx'
import { AuthContextProvider } from "./utils/AuthContext.js";

export default function App(){
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/verify" exact element={<VerifyEmail/>}></Route>
        <Route path="/mealplan" element={<MealPlan />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
  </BrowserRouter>
}

const element = document.getElementById("app");
const root = createRoot(element);
root.render(<AuthContextProvider><App/></AuthContextProvider>);
