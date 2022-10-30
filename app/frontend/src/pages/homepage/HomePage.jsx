import React from "react";
import HeroHomePage from "../../components/HeroHomePage.jsx";
import Mealplan from "../mealplan/MealPlan.jsx";
import Newsletter from "../../components/Newletter.jsx";

const HomePage = () => {
  return (
    <>
      <HeroHomePage />
      <Mealplan />
      <Newsletter />
    </>
  );
};

export default HomePage;
