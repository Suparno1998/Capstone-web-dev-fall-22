import React from "react";
import { Link } from "react-router-dom";
import "../checkout/CheckOut.css";

const checkout = () => {
  return (
    <div className="row">
      <div className="checkout_heading">
        <h2 className="checkout_head">CheckOut Page</h2>
      </div>
      <div className="container row">
        <div className="col-md-8 offset-2 checkout_card">
          <form action="" className="checkout_form">
            <div className="form-group">
              <label name-="fullname" className="control-label">
                Full Name
              </label>
              <input name="fullname" className="form-control" />
            </div>
            <div className="form-group">
              <label name="address" className="control-label">
                Shipping Address
              </label>
              <input name="address" className="form-control" />
            </div>
            <div className="form-group">
              <label name="zipcode" className="control-label">
                Area Zipcode
              </label>
              <input name="address" className="form-control" />
            </div>
            <div className="form-group">
              <label name="email" className="control-label">
                Email
              </label>
              <input name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label name="phone" className="control-label">
                Phone Number
              </label>
              <input name="phone" className="form-control" />
            </div>
            <div className="form-group">
              <label name="message" className="control-label">
                Message
              </label>
              <input name="phone" className="form-control" />
            </div>

            <div className="form-group">
              <input
                className="btn btn-warning float-right"
                type="submit"
                value="Pay"
              />
              <Link to="/cart">
                <input className="btn btn-danger float-right" value="Cancel" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default checkout;
