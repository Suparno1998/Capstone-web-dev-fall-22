import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../checkout/CheckOut.css";

const checkout = () => {
  const [fullName, setFullName] = useState("")
  const [shippingAddress, setShippingAddress]=useState("")
  const [zipCode, setZipCode] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNum, setPhoneNum] = useState("")
  const {cartTotal} = useCart()


  const handleChange = (e)=>{
    switch(e.target.id){
      case "fullname":
        console.log('t')
        setFullName(e.target.value)
        break
      case "shippingAddress":
        setShippingAddress(e.target.value)
        break;
      case "zipcode":
        setZipCode(e.target.value)
        break;
      case "email":
        setEmail(e.target.value)
        break
      case "phoneNumber":
        setPhoneNum(e.target.value)
        break
      default:
        console.log("error")
    }
  }
  return (
    <div className="row">
      <div className="checkout_heading">
        <h2 className="checkout_head">CheckOut Page</h2>
      </div>
      <div className="container row d-flex justify-content-center">
        <div class="col-md-6 text-center mb-5">
        <PayPalScriptProvider options={{ "client-id": "test", currency : "CAD"}}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code : "CAD",
                                    value: cartTotal,  
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(async (details) => {
                        const name = details.payer.name.given_name+" "+details.payer.name.surname;
                        const obj = JSON.stringify({
                            fullName : name,
                            shippingAddress : Object.values(details.payer.address).join(" , "),
                            zipCode : details.payer.address.postal_code,
                            email : details.payer.email_address,
                            phoneNum : details.payer.phone.phone_number.national_number,
                            cartTotal : cartTotal
                          })
                        console.log(obj)
                        let data = await fetch("/api/createorder",{
                          method : "POST",
                          "headers" : { 'Content-Type': 'application/json' },
                          "body" : obj
                        })
                        let resp = await data.json()
                        if(resp.status){
                          alert(`Transaction completed by ${name}`);
                        }
                    });
                }}
            />
            </PayPalScriptProvider>
            <Link to="/cart">
              <input className="btn btn-danger float-right" value="Cancel" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default checkout;
