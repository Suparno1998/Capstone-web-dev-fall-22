import React, {useState}from "react";
import Alert from 'react-bootstrap/Alert';
import { FaPlane } from "react-icons/fa";
import "./ContactUs.css"
const ContactUs = () => {
  const [position, setPosition] = useState({})
  const [email,setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
  const [variant, setVariant] = useState("")
  const [hasResponse, setHasResponse] = useState(false)

  const handleInput = (e)=>{
    const val = e.target.value
    switch(e.target.name){
      case "name":
        setName(val)
        break
      case "email":
        setEmail(val)
        break
      case "message":
        setMessage(val)
        break
      default:
        console.log('error')
    }
  }
  const getLocation = ()=>{
    if (!navigator.geolocation) {
      showAlert("warning", "Geolocation is not supported by this browser. But still you can contact us.")
      handleSubmit(null)
    }
    else{
      navigator.geolocation.getCurrentPosition(handleSubmit,handleSubmit)
    }
  }
  const handleSubmit = async (location)=>{
    console.log(location)
    if(name === ""){
      showAlert("warning", "Please enter your name to continue")
      return
    }
    if(email === ""){
      showAlert("warning", "Please enter your email to continue")
      return
    }
    if(message === ""){
      showAlert("warning", "Please enter your message to continue")
      return
    }
    let contactObject = {}
    if(location.coords){
      contactObject = {
        name : name,
        email : email,
        message : message,
        position : {
          lat : location.coords.latitude,
          long : location.coords.longitude
        }
      }
    }
    if(location.coords === undefined){
      contactObject = {
        name : name,
        email : email,
        message : message,
      }
    }
    console.log(contactObject)
    const response = await fetch('/other/contact',{
      method : "POST",
      headers : { 'Content-Type': 'application/json' },
      body : JSON.stringify(contactObject)
    })
    const data = await response.json()
    if(data.status){
      showAlert("success","Your message has been received. Thanks for contacting us.")
    }
    else{
      showAlert("danger","Something is wrong on our end, we will get back to you soon.")
    }
  }

  const showAlert = (variant, message) => {
    setVariant(variant)
    setResponse(message)
    setHasResponse(true)
  }
  const handleCloseAlert = ()=>{
    setVariant("")
    setHasResponse(false)
    setResponse("")
  }
  return (
    <div>
      <div className="container-fluid">
          <div className="row d-flex justify-content-around" style={{height : "100vh"}}>
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="form">
                    <Alert show={hasResponse} variant={variant} onClose={handleCloseAlert} dismissible>{response}</Alert>
                    <div className="form-group">
                      <input className="form-control mb-2" type="text" placeholder="Enter Your Name" name="name" id="name" onChange={handleInput} value={name}></input>
                    </div>
                    <div className="form-group">
                      <input className="form-control mb-2" type="email" placeholder="Enter Your Email" name="email" id="email" onChange={handleInput} value={email}></input>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control mb-2" type="text" placeholder="Enter Your Name" name="message" id="message" onChange={handleInput} value={message} rows={5}></textarea>
                    </div>
                    <button className="btn btn-outline-success mb-2" onClick={getLocation} type="button">Contact Us <FaPlane></FaPlane></button>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12"></div>
              <div className="col-lg-5 col-md-6 col-sm-12 pe-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195551.47782872536!2d-105.5515105671875!3d40.01979699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec2a2e179131%3A0xbd5654e9f8c405cd!2sFood%20Lab!5e0!3m2!1sen!2sca!4v1666908911565!5m2!1sen!2sca" allowFullScreen="" height={450} width={750} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
      </div>
    </div>
   
  );
};


export default ContactUs;