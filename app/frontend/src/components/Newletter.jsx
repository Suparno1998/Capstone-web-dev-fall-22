import React, {useState, useEffect}from "react";
import "../styles/newsletter.css";

function Newletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleChange = (e)=>{
    switch(e.target.id){
      case "name":
        setName(e.target.value)
        break;
      case "email":
        setEmail(e.target.value)
        break;
      }
  }

  const handleSubmit = async ()=>{
    if(name === ""){
      alert("Name is required")
      return
    }
    if(email === ""){
      alert("Email is required")
      return
    }
    const subscribeObj = {
      name : name,
      email : email,
    }
    console.log(subscribeObj)
    const response = await fetch('http://localhost:3000/other/newsletter',{
      method : "POST",
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify(subscribeObj)
    })
    const data = await response.json()
    if(data.status){
      alert("Subscribed successfully")
    }else{
      alert("Error")
    }
  }
  return (
    <div className="wrapper">
      <form action="#" className="card-content">
        <div className="container">
          <div className="image">
            <i className="fas fa-envelope"></i>
          </div>
          <h1>Join Our Club</h1>
          {/* <p>Get updates about our latest food plan.</p> */}
        </div>
        <div className="form-input">
          <input className="name" name="name" id="name" type="text" placeholder="Enter your name" onChange={handleChange}/>
          <label htmlFor="email"></label>
          <input className="email" type="email" name="email" id="email" placeholder="Your Email" onChange={handleChange}/>
          <button className="subscribe-btn" type="button" onClick={handleSubmit}>Subscribe</button>
        </div>
      </form>
    </div>
  );
}

export default Newletter;
