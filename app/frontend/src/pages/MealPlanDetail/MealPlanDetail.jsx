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
        <h2 className="bold mb-4">Meal Plan Description</h2>
        <div className="mealplan_card">
          <div class="card mb-4">
            <img
              class="card-img-top"
              src="./images/day1.jpg"
              alt="Card image cap"
              width={200}
            />
            <div class="card-body">
              <h5 class="card-title bold">
                butter chicken/ Omlet/ Roasted Chicken/ Tandoori Murga Full/
                Chinese Salad
              </h5>
              <button class="btn btn-danger">Day1</button>
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
              <h5 class="card-title">
                {" "}
                butter chicken/ Omlet/ Roasted Chicken/ Tandoori Murga Full/
                Chinese Salad
              </h5>

              <button class="btn btn-danger">Day 2</button>
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
              <h5 class="card-title">
                {" "}
                butter chicken/ Omlet/ Roasted Chicken/ Tandoori Murga Full/
                Chinese Salad
              </h5>

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
              <h5 class="card-title">
                {" "}
                butter chicken/ Omlet/ Roasted Chicken/ Tandoori Murga Full/
                Chinese Salad
              </h5>

              <button class="btn btn-danger">Day 4</button>
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
              <h5 class="card-title">
                {" "}
                butter chicken/ Omlet/ Roasted Chicken/ Tandoori Murga Full/
                Chinese Salad
              </h5>

              <button class="btn btn-danger">Day 5</button>
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
              <h5 class="card-title">
                {" "}
                butter chicken/ Omlet/ Roasted Chicken/ Tandoori Murga Full/
                Chinese Salad
              </h5>

              <button class="btn btn-danger">Day 6</button>
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
              <h5 class="card-title">
                {" "}
                butter chicken/ Omlet/ Roasted Chicken/ Tandoori Murga Full/
                Chinese Salad
              </h5>
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
