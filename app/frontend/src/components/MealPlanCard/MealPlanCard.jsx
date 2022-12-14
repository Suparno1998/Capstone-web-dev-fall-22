import React, { useState } from "react";
import { useAuthContext } from "../../utils/AuthContext";
import SubscribeModal from "../SubscribeModal.jsx";
import "../MealPlanCard/mealplancard.css";
import {useCart} from "react-use-cart";
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
  const handleCart = (item) =>{
    let items = {
      id: item._id,
      title: item.title,
      description: item.description,
      short_description: item.short_description,
      price: item.price,
      mealplanImage: item.mealplanImage
    }
    addItem(items);
  };
  return (
    <>
      <SubscribeModal
        show={subscribe}
        handleClose={handleClose}
        mealPlan={props.plan}
      ></SubscribeModal>
      <div className="card meal-plan-card p-2" style={{ width: "370px" }}>
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
              <a className="btn btn-outline-dark me-2" onClick={handleOpen}>
                Subscribe{" "}
              </a>
            )
          ) : (
            <></>
          )}
          {/* <button onClick={()=>props.handleAddToCart(props.plan)}>Add To Cart</button> */}
          {/* <button onClick={()=>handleCart(props.plan)}>Add To Cart</button> */}
        </div>
      </div>
    </>
  );
};

export default MealPlanCard;
