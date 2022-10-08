import React from "react";
import "../styles/main.css";

function Footer() {
    return(
        <footer>
            <div class="footer container">
                <div class="footer-info">
                    <h4>Address</h4>
                    <span>10 Mill Creek Road, Cambridge</span>
                </div>
                
                <div class="footer-info">
                    <h4>Office Hours</h4>
                    <span>Mon-Fri 11am-6pm</span>
                </div>
                
                <div class="footer-info">
                    <h4>Email</h4>
                    <a href="mailto:mshaikh@conestogac.on.ca">info@info.com</a>
                </div>
                
                <div class="footer-info">
                    <h4>Telephone</h4>
                    <a href="tel:+15197711379">+1 519 771 1379</a>
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