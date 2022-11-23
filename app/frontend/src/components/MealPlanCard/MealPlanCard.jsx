import React, { useState } from "react";
import { useAuthContext } from "../../utils/AuthContext";
import SubscribeModal from "../SubscribeModal.jsx";
import "../MealPlanCard/mealplancard.css"
const MealPlanCard = (props) => {
  const {user} = useAuthContext()
  const [subscribe, setSubscribe] = useState(false)
  console.log(props)
  const handleOpen = ()=>{
    setSubscribe(true)
  }
  const handleClose = ()=>{
    setSubscribe(false)
  }
  return (
    <>
    <SubscribeModal show={subscribe} handleClose={handleClose} mealPlan={props.plan}></SubscribeModal>
    <div className="card meal-plan-card" style={{width:"385px"}}>
      <div className="card-img-top meal-plan-image ">
        <img src="/images/keto-meal-plan.jpg" alt="Meal Plan" />
      </div>
      <div className="meal-plan-detail">
        <h4 className="meal-plan-title">{props.plan.title}</h4>
        <p>{props.plan.short_description}</p>
        <a className="btn btn-outline-dark me-3" href={`/mealdetail`}>
          Learn More
        </a>
        { user ? props.plan.isSubscribed ? <></> : <a className="btn btn-outline-dark" onClick={handleOpen}>Subscribe </a> : <></>}
      </div>
    </div>
    </>
  );
};

export default MealPlanCard;
