import React, { Component } from "react";
import "./HomeDishPromotion.css";


function HomeDishPromotion(){
    return(
        <section className="home-dish-promotion">
            <div className="container">
                <div class="row">
                    <div class="col-6">
                        <h1>Eggs With Bacon</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p className="bold">Energy: <span class="red">498 kkal</span></p>
                        <p className="bold">Protein: <span class="green">26 g</span></p>
                        <p className="bold">Fat: <span class="green">8 g</span></p>
                        <p className="bold">Carbohydrates: <span class="green">49 g</span></p>
                        <p className="bold red price">$7.99</p>
                        <button type="button" class="btn btn-danger">Add to cart</button>
                        <button type="button" class="btn btn-primary">More info</button>
                    </div>
                    <div class="col-6">
                        <img className="egg-image-tag" src="./images/natural-100-percent.png"/>
                        <img className="product-image" src="./images/eggs-with-bacon.jpg" alt="Eggs with bacon"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <img className="salmon-image-tag" src="./images/natural-100-percent.png"/>
                        <img className="product-image" src="./images/salmon-with-vegetables.jpg" alt="Eggs with bacon"/>
                    </div>
                    <div class="col-6">
                        <h1>Salmon With Vegetables</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p className="bold">Energy: <span class="red">498 kkal</span></p>
                        <p className="bold">Protein: <span class="green">26 g</span></p>
                        <p className="bold">Fat: <span class="green">8 g</span></p>
                        <p className="bold">Carbohydrates: <span class="green">49 g</span></p>
                        <p className="bold red price">$17.99</p>
                        <button type="button" class="btn btn-danger">Add to cart</button>
                        <button type="button" class="btn btn-primary">More info</button>
                    </div>
                    
                </div>
            </div>
        </section>   
    )
}

export default HomeDishPromotion