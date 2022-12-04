import React, { useState } from "react";
import { useAuthContext } from "../../utils/AuthContext";
import SubscribeModal from "../SubscribeModal.jsx";
import "../MealPlanCard/mealplancard.css";
const MealPlanCard = (props) => {
  const { user } = useAuthContext();
  const [subscribe, setSubscribe] = useState(false);
  console.log(props);
  const handleOpen = () => {
    setSubscribe(true);
  };
  const handleClose = () => {
    setSubscribe(false);
  };
  return (
<<<<<<< HEAD
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
        <button onClick={()=>props.handleAddToCart(props.plan)}>Add To Cart</button>
=======
    <>
      <SubscribeModal
        show={subscribe}
        handleClose={handleClose}
        mealPlan={props.plan}
      ></SubscribeModal>
      <div className="card meal-plan-card" style={{ width: "385px" }}>
        <div className="card-img-top meal-plan-image ">
          <img src={`/uploads/${props.plan.mealplanImage}`} alt="Meal Plan" />
        </div>
        <div className="meal-plan-detail">
          <h4 className="meal-plan-title">{props.plan.title}</h4>
          <p>{props.plan.short_description}</p>
          <a className="btn btn-outline-dark me-3" href={`/mealdetail`}>
            Learn More
          </a>
          {user ? (
            props.plan.isSubscribed ? (
              <></>
            ) : (
              <a className="btn btn-outline-dark" onClick={handleOpen}>
                Subscribe{" "}
              </a>
            )
          ) : (
            <></>
          )}
        </div>
>>>>>>> 7c8224c51ec421a2f72de0331375e1c19fb33ee1
      </div>
    </>
  );
};

export default MealPlanCard;
