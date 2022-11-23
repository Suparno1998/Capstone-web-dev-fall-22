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
                            <div className="col-2"><img className="img-fluid" src="https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg" alt="Regular meal plan"/></div>
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
                            <div className="col-2"><img className="img-fluid" src="https://nutritionfacts.org/app/uploads/2021/09/sheet-pan-meals-960x960.jpeg" alt="Diet meal plan"/></div>
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
                            <div className="col-2"><img className="img-fluid" src="https://i0.wp.com/didntijustfeedyou.com/wp-content/uploads/2021/04/how-to-make-dips-dinner-didnt-i-just-feed-you-2-1024x1024.jpg?resize=960%2C960&ssl=1" alt="High calories meal plan"/></div>
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