import React, { useEffect, useState } from "react";
import Mealplancard from "../../components/MealPlanCard/MealPlanCard.jsx";
import FullPageSpinner from "../../components/FullPageSpinner.jsx";
import "./mealplan.css";

const MealPlan = ({handleAddToCart}) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setisLoading(true);
      const response = await fetch("/other/plans", {
        method: "GET",
      });
      const data = await response.json();
      setMeals(data.data);
      setTimeout(() => {
        setisLoading(false);
      }, 1000);
    }
    fetchData();
  }, []);
  return (
    <div className="meal-plan-section">
      <div className="container-fluid">
        {isLoading ? (
          <FullPageSpinner variant="success" />
        ) : (
          <>
            <div className="row text-center">
              <h1 className="bold mt-4">Our Meal Plans</h1>
            </div>
            <div className="row d-flex">
              <div className="meal-plan-list">
                {meals.map((meal) => (
<<<<<<< HEAD
                  <Mealplancard plan={meal} handleAddToCart={handleAddToCart}/>
=======
                  <Mealplancard plan={meal} key={meal._id}/>
>>>>>>> 7c8224c51ec421a2f72de0331375e1c19fb33ee1
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default MealPlan;
