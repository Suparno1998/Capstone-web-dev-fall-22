import React from "react";
import "./HomeTrialDay.css";

function HomeTrialDay(){
    return(
        <section className="home-trial">
            <div className="container">
                <div className="contents">
                    <h1>Try Trial Day <br/> For Only <span class="extra-style">5 Dollars</span></h1>
                    <button type="button" class="btn btn-danger">Order Now</button>
                </div>
            </div>
        </section>   
    )
}

export default HomeTrialDay