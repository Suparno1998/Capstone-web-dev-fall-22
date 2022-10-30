import React from "react";
import Mealplancard from "./MealPlanCard/Mealplancard.jsx";

const MealPlan = () => {
  return (
    <div className="meal-plan-section">
      <div className="container">
        <div className="row">
          <h2 className="meal-plan-heading">Our Meal Plan</h2>
          <div className="meal-plan-list">
            <Mealplancard />
            <Mealplancard />
            <Mealplancard />
            <Mealplancard />
            <Mealplancard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
