import React from "react";
import "../styles/main.css";

function HeroHomePage() {
    return(
        <section className="hero">
            <div className="container">
                <div className="text-block">
                    <p>For Active People</p>
                    <h1>Healthy Food <br/>For Better Life</h1>
                    <h2>Join Our Nutrition Programs</h2>
                    <button type="button">Choose Your Plan</button>
                </div>
            </div>
        </section>
    );
}

export default HeroHomePage;