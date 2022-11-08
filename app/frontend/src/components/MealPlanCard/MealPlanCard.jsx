import React from "react";
import "../MealPlanCard/mealplancard.css";

const MealPlanCard = (props) => {
  return (
    <div className="card meal-plan-card" style={{width:"385px"}}>
      <div className="card-img-top meal-plan-image ">
        <img src="/images/keto-meal-plan.jpg" alt="Meal Plan" />
      </div>
      <div className="meal-plan-detail">
        <h4 className="meal-plan-title">{props.plan.title}</h4>
        <p>{props.plan.short_description}</p>
        <a className="btn btn-outline-dark me-3" href="/#">
          Learn More
        </a>
        {props.plan.isSubscribed ? <a className="btn btn-outline-success" href="/#">
          Edit Subscription
        </a> : <a className="btn btn-outline-dark" href="/#">
          Subscribe 
        </a>}
      </div>
    </div>
  );
};

export default MealPlanCard;
