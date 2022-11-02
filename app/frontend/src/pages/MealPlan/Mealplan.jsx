import React, { useState } from "react";
import Mealplancard from "./MealPlanCard/Mealplancard.jsx";
import "./mealplan.css";

const MealPlan = () => {
  const [meals, setMeals] = useState([
    {
      mealName: "Regular Meal Plan",
      mealDescription:
        "Ensure that every customer have a healthy life.",
    },
    {
      mealName: "Less Calorie Meal",
      mealDescription:
        "less calorie in their meal.",
    },
    {
      mealName: "High Calorie Meal Plan",
      mealDescription:
        "high calorie rich meal.",
    },
    {
      mealName: "High Protein Meal Plan",
      mealDescription:
        "Make their body structure strong.",
    },
    {
      mealName: "Keto Meal Plan",
      mealDescription:
        "Less carbohydrates meals and rich in fats.",
    },
    {
      mealName: "Weigh Loss Meal Plan",
      mealDescription:
        "Reduce their weight very rapidly.",
    },
  ]);

  return (
    <div className="meal-plan-section">
      <div className="container">
        <div className="row">
          <h2 className="meal-plan-heading">Our Meal Plan</h2>
          <div className="meal-plan-list">
            {meals.map((meal) => (
              <Mealplancard
                mealName={meal.mealName}
                mealDescription={meal.mealDescription}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
