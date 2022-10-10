import React from "react";
import "../styles/newsletter.css";

function Newletter() {
  return (
    <div className="wrapper">
      <form action="#" class="card-content">
        <div className="container">
          <div className="image">
            <i className="fas fa-envelope"></i>
          </div>
          <h1>Join Our Club</h1>
          {/* <p>Get updates about our latest food plan.</p> */}
        </div>
        <div className="form-input">
          <input className="name" type="text" placeholder="Enter your name" />
          <label for="email"></label>
          <input className="email" type="email" placeholder="Your Email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </form>
    </div>

    /* <h1>Join Our Club</h1>
      <div className="newsletter-card">
        <h3>Know About our Latest Plan</h3>
        <div>
          <div className="newsletter-detail">
            <div className="name">
              <label htmlFor="Name">Name: </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="email">
              <label htmlFor="email">Enter your email: </label>
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <button>Subscribe Me</button>
        </div>
      </div> */
  );
}

export default Newletter;
