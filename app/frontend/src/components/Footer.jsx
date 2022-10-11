import React from "react";
import "../styles/main.css";

function Footer() {
  return (
    <footer>
      <div class="footer container">
        <div class="footer-info">
          <h4>Address</h4>
          <span>10 Mill Creek Road, Cambridge</span>
        </div>

        <div class="footer-info">
          <h4>Email</h4>
          <a href="mailto:mshaikh@conestogac.on.ca">info@info.com</a>
        </div>

        <div class="footer-info">
          <h4>Telephone</h4>
          <a href="tel:+15197711379">+1 519 771 1379</a>
        </div>
        <div class="footer-info-media">
          <h4>Social Media Links</h4>
          <img
            width={60}
            className="facebook"
            src="/images/facebook.png"
            alt="Facebook Logo"
          />
          <img
            width={60}
            className="instagram"
            src="/images/instagram.png"
            alt="Instagram Logo"
          />
          <img
            width={60}
            className="twitter"
            src="/images/twitter.png"
            alt="Twitter Logo"
          />
          <img
            width={60}
            className="linkedIn"
            src="/images/linkedIn.png"
            alt="LinkedIn Logo"
          />
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <p>&copy; Capstone Project Group 2 - 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
