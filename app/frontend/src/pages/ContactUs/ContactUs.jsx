import React, {useState}from "react";
import Alert from 'react-bootstrap/Alert';
import { FaPlane } from "react-icons/fa";
import "./ContactUs.css"
const ContactUs = () => {
  const [position, setPosition] = useState({})
  const [email,setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [getNewsletter, setGetNewsLetter] = useState(true)
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
      case "newsletter":
        setGetNewsLetter(e.target.checked)
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
  const clear = ()=>{
    setName("")
    setEmail("")
    setMessage("")
    setGetNewsLetter(true)
    setPosition(null)
  }
  const handleCloseAlert = ()=>{
    setVariant("")
    setHasResponse(false)
    setResponse("")
  }
  return (
    <div className="wrapper-contact">

    <div className="contact-form">
      <h4>GET IN TOUCH</h4>
      <h2 className="form-headline">Send us a message</h2>
      <Alert show={hasResponse} variant={variant} onClose={handleCloseAlert} dismissible>{response}</Alert>
      <form id="submit-form" action="">
        <p>
          <input name="name" id="name" className="form-input" type="text" placeholder="Your Name*" style={{width:"100%"}} value={name} onChange={handleInput}/>
        </p>
        <p>
          <input name="email" id="email" className="form-input" type="email" placeholder="Your Email*" style={{width:"100%"}} value={email} onChange={handleInput}/>
        </p>
        <p className="full-width">
          <textarea  minLength="20" name="message" id="message" cols="30" rows="7" placeholder="Your Message*" required value={message} onChange={handleInput}></textarea>
        </p>
        <p className="full-width">
          <input type="checkbox" id="newsletter" name="newsletter" checked={getNewsletter} onChange={handleInput}/> Yes, I would like to receive communications by call / email about Company's services.
        </p>
        <p className="full-width">
          <input type="submit" className="btn btn-outline-danger" value="Submit" onClick={getLocation}/>
          <button className="btn btn-outline-danger" onClick={clear}>Reset</button>
        </p>
      </form>
    </div>

    <div className="contacts contact-wrapper">
      <ul>
        <li>We've driven online revenues of over <span className="highlight-text-grey">$2
            billion</span> for our clients. Ready to know
          how we can help you?</li>
        <span className="hightlight-contact-info text-center">
          <li className="email-info mb-3"><i className="fa fa-envelope" aria-hidden="true"></i> info@demo.com</li>
          <li className="mb-3"><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+91 11 1111 2900</span></li>
        </span>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195551.47782872536!2d-105.5515105671875!3d40.01979699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec2a2e179131%3A0xbd5654e9f8c405cd!2sFood%20Lab!5e0!3m2!1sen!2sca!4v1666908911565!5m2!1sen!2sca" allowFullScreen="" height={350} width={750} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </ul>
    </div>
  </div>
   
  );
};


export default ContactUs;