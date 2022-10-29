import React from "react";
import "../MealPlan/mealplan.css";
import MealPlanCard from "./MealPlanCard/Mealplancard.jsx";

const Mealplan = () => {
  return (
    <div className="meal-plan-section">
      <div className="container">
        <div className="row">
          <h2 className="meal-plan-heading">Our Meal Plan</h2>
          <div className="meal-plan-list">
            <MealPlanCard />
            <MealPlanCard />
            <MealPlanCard />
            <MealPlanCard />
            <MealPlanCard />
            <MealPlanCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mealplan;
