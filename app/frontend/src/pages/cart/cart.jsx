import React from "react";
import './cart.css'

import Navbar from "../../components/Navbar.jsx";

const Cart = () => {
  return (
    <div className="cart cart-page">
        <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>    
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg"/></div>
                            <div className="col">
                                <div className="row text-muted">Regular Meal</div>
                                <div className="row">Regular Meal Plan</div>
                            </div>
                            <div className="col">
                                <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col">$ 44.00 </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"/></div>
                            <div className="col">
                                <div className="row text-muted">Diet Meal</div>
                                <div className="row">Diet Meal Plan</div>
                            </div>
                            <div className="col">
                                <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col">$ 44.00 </div>
                        </div>
                    </div>
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg"/></div>
                            <div className="col">
                                <div className="row text-muted">High Calories</div>
                                <div className="row">High Calories Meal Plan</div>
                            </div>
                            <div className="col">
                                <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col">$ 44.00 </div>
                        </div>
                    </div>
                    <div className="back-to-shop"><span className="text-muted">Back to shop</span></div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col">ITEMS 3</div>
                        <div className="col text-right">$ 132.00</div>
                    </div>
                    <form>
                        <p>COUPON CODE</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div className="row" >
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">$ 132.00</div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
    </div>
  );
};

export default Cart;