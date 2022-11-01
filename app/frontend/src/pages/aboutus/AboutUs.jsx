import React from "react";
import './AboutUs.css'
import Navbar from "../../components/Navbar.jsx";

const AboutUs = () => {
  return (
    <div>
      <div>
        <section id="about">
            <div class="container">
              <header class="section-header aos-init">
                <h3>About Us</h3>
                <p>At FoodLab, we understand that "healthy" actually means something different to everyone. So we've worked tirelessly to ensure that this site offers options no matter what your taste, cooking experience, or dietary preferences are.</p>
              </header>
              <div class="row about-cols">
                <div class="col-md-4">
                  <div class="about-col">
                    <h2 class="title"><a href="#">Our Mission</a></h2>
                    <p>We simplify the meal planning process. Our tools equip households to eat better food, eat together, save money at the grocery store, and have a less stressful cooking experience. We simplify the meal planning process. Our tools equip households to eat better food</p>
                    <div class="d-flex justify-content-center">
                      <a href="#" class="btn-sm-default-web">Read more</a>
                    </div>
                  </div>
                </div>
              <div class="col-md-4">
                <div class="about-col">
                  <h2 class="title"><a href="#">Our Plan</a></h2>
                  <p>Our delicious meal plans are designed by registered dietitians and food experts to help you lose weight, eat more fiber, go vegan and more. Our delicious meal plans are designed by registered dietitians and food experts to help you lose weight, eat more fiber and more.
                  </p>
                  <div class="d-flex justify-content-center">
                    <a href="#" class="btn-sm-default-web">Read more</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="about-col">
                  <h2 class="title"><a href="#">Our Vision</a></h2>
                  <p>FoodLab will be the first food management system that combines dining out, eating store-bought food, and cooking at home to help you find and organize the restaurants, products, and recipes that fit your diet and can help you reach your nutrition goals and keep you healthy.</p>
                  <div class="d-flex justify-content-center">
                    <a href="#" class="btn-sm-default-web">Read more</a>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
