import React from "react";
import "../MealPlanDetail/MealPlanDetail.css";
import { useParams } from "react-router";
const MealPlanDetail = () => {
  const { id } = useParams();
  console.log(id);
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
            <h1>Regular Meal Plan</h1>
            <p>
              Regular Meal Plan contains regular food that we consume in our
              daily life. However, every ingredient is inspected by the
              nutritionist and the meal plan is approved by the WHO.
            </p>
            <p className="bold">
              Energy: <span class="red">498 kcal</span>
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
        <h2 className="bold mb-4">Meal Plan Description</h2>
        <div className="mealplan_card">
          <div class="card mb-4">
            <img
              class="card-img-top"
              src="./images/Regular1.png"
              alt="Card image cap"
              width={200}
            />
            <div class="card-body">
              <h5 class="card-title bold">Wheat Pancake/Finger salad/Fish</h5>
              <button class="btn btn-danger">Day1</button>
            </div>
          </div>
          <div class="card mb-4">
            <img
              class="card-img-top"
              src="./images/Regular2.jpg"
              alt="Card image cap"
              width={300}
            />
            <div class="card-body">
              <h5 class="card-title"> Egg/Corn Salad/ Grilled Tomato</h5>

              <button class="btn btn-danger">Day 2</button>
            </div>
          </div>
          <div class="card mb-4">
            <img
              class="card-img-top"
              src="./images/Regular3.jpg"
              alt="Card image cap"
              width={300}
            />
            <div class="card-body">
              <h5 class="card-title"> Chicken/Beans Salad</h5>

              <button class="btn btn-danger">Day 3</button>
            </div>
          </div>
          <div class="card mb-4">
            <img
              class="card-img-top"
              src="./images/day1.jpg"
              alt="Card image cap"
              width={300}
            />
            <div class="card-body">
              <h5 class="card-title"> Rice/Fish/Stick salad</h5>

              <button class="btn btn-danger">Day 4</button>
            </div>
          </div>
          <div class="card mb-4">
            <img
              class="card-img-top"
              src="./images/Regular4.png"
              alt="Card image cap"
              width={300}
            />
            <div class="card-body">
              <h5 class="card-title"> Brown Rice with fish</h5>

              <button class="btn btn-danger">Day 5</button>
            </div>
          </div>
          <div class="card mb-4">
            <img
              class="card-img-top"
              src="./images/Regular5.jpeg"
              alt="Card image cap"
              width={300}
            />
            <div class="card-body">
              <h5 class="card-title"> Brown Rice/Fish</h5>

              <button class="btn btn-danger">Day 6</button>
            </div>
          </div>
          <div class="card mb-4">
            <img
              class="card-img-top"
              src="./images/Regular6.jpeg"
              alt="Card image cap"
              width={300}
            />
            <div class="card-body">
              <h5 class="card-title"> Pasta with egg/ Fruits</h5>
              {/* <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              <button class="btn btn-danger">Day 7</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlanDetail;
