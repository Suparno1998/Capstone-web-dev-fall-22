import React from "react";
import "../MealPlanCard/mealplancard.css";

const Mealplancard = ({ mealName, mealDescription }) => {
  return (
    <div className="meal-plan-card">
      <div className="meal-plan-image">
        <img src="/images/keto-meal-plan.jpg" alt="Meal Plan" />
      </div>
      <div className="meal-plan-detail">
        <h4 className="meal-plan-title">{mealName}</h4>
        <p>{mealDescription}</p>
        <a className="btn btn-success" href="/#">
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Mealplancard;
