import React from "react";
import "../MealPlanCard/mealplancard.css";

function Mealplancard() {
  return (
    <div className="meal-plan-card">
      <div className="meal-plan-image">
        <img src="/images/keto-meal-plan.jpg" alt="Meal Plan" />
      </div>
      <div className="meal-plan-detail">
        <h4>Keto Meal Plan</h4>
        <p>This is the description of the keto meal plan.</p>
        <a className="btn btn-success" href="">
          Subscribe
        </a>
      </div>
    </div>
  );
}

export default Mealplancard;
