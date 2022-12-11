import React,{useState} from "react";
import './cart.css'
import { useCart } from "react-use-cart";

const Cart = (props) => {
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    if(isEmpty) return <h1 className="text-center">Your cart is empty</h1>
  return (
    <div className="cart cart-page">
        <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">Total Unique Items: {totalUniqueItems} </div>
                        </div>
                    </div> 
                    {items.map((item, index) => {
                        let imagePath = '/uploads/';
                        return(
                            <div className="row border-bottom" key={index}>
                                <div className="row main align-items-center">
                                    <div className="col-2">
                                        <img className="img-fluid" src={"/uploads/" + item.mealplanImage} alt="Regular meal plan"/>
                                    </div>
                                    <div className="col">
                                        <div className="row text-muted">{item.title}</div>
                                    </div>
                                    <div className="col">
                                        <button className="quantity" 
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span className="border">{item.quantity}</span>
                                        <button className="quantity"
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <div className="col">$ {item.price} </div>
                                    <div className="col">
                                        <button className="quantity"
                                            onClick={() => removeItem(item.id)}>X</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}  
                    
                    <div className="back-to-shop">
                        <span className="text-muted">Back to shop | </span>
                        <button className="quantity"
                            onClick={() => emptyCart()}>Clear Cart</button>
                    </div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col">Total Items {totalItems}</div>
                        <div className="col text-right">$ {cartTotal}</div>
                    </div>
                    <form>
                        <p>COUPON CODE</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div className="row" >
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">$ {cartTotal}</div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
    </div>
  );
};

export default Cart;