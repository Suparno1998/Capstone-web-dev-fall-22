import React from "react";
import "../MealPlanDetail/MealPlanDetail.css";

const MealPlanDetail = () => {
  return (
    <section className="mealplan-detail">
      <div className="container">
        <div class="row">
          <div class="col-6">
            <img
              className="salmon-image-tag"
              src="./images/natural-100-percent.png"
            />
            <img
              className="product-image"
              src="./images/salmon-with-vegetables.jpg"
              alt="Eggs with bacon"
            />
          </div>
          <div class="col-6">
            <h1>Salmon With Vegetables</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="bold">
              Energy: <span class="red">498 kkal</span>
            </p>
            <p className="bold">
              Protein: <span class="green">26 g</span>
            </p>
            <p className="bold">
              Fat: <span class="green">8 g</span>
            </p>
            <p className="bold">
              Carbohydrates: <span class="green">49 g</span>
            </p>
            <p className="bold red price">$17.99</p>
            <button type="button" class="btn btn-danger">
              Add to cart
            </button>
            <button type="button" class="btn btn-primary">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mealplan-by-days">
            <h2>Meal Plan Description By Days</h2>
            <div className="mealplanday-card">
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlanDetail;
