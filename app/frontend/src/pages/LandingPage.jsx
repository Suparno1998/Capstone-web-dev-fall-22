import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Navbar from "../components/Navbar.jsx";
import HeroHomePage from "../components/HeroHomePage.jsx";
import Newsletter from "../components/Newletter.jsx";
import Footer from "../components/Footer.jsx";
import Modal from "react-bootstrap/Modal";
import MealPlan from "./MealPlan/Mealplan.jsx";
import HomeTrialDay from "../components/HomeTrialDay/HomeTrialDay.jsx";
import HomeSlider from "../components/HomeSlider/HomeSlider.jsx";
import HomeDishPromotion from "../components/HomeDishPromotion/HomeDishPromotion.js";

export default function LandingPage(props) {
  const message =
    window.location.search === ""
      ? ""
      : window.location.search.replace("?", "").split("=")[1];
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  function handleOpen() {
    console.log("hi");
    setIsLoginModalOpen(true);
  }
  function handleClose() {
    setIsLoginModalOpen(false);
  }
  useEffect(() => {
    console.log(message);
    if (message === "verified") {
      console.log("works");
      alert("Your email was verified successfully. Please login to continue");
    }
  }, []);
  return (
    <div>
      {/* <Navbar
          handleOpen={handleOpen}
          handleClose={handleClose}
        ></Navbar> */}
      {/* <h2>Hello, world!</h2>
                    <h1>Hello, {this.state.team.join(", ")}</h1> */}
      <HeroHomePage />
      <MealPlan handleAddToCart={props.handleAddToCart}/>
      <HomeDishPromotion />
      <HomeTrialDay />
      <HomeSlider />
      <Newsletter />
    </div>
  );
}
