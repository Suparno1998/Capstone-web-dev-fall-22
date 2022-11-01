import React, {useState}from "react";
import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";
import "./ContactUs.css"
const ContactUs = () => {
  const [email,setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
  const [variant, setVariant] = useState("")
  const [hasResponse, setHasResponse] = useState("")
  return (
    <div>
      <div className="container-fluid">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195551.47782872536!2d-105.5515105671875!3d40.01979699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec2a2e179131%3A0xbd5654e9f8c405cd!2sFood%20Lab!5e0!3m2!1sen!2sca!4v1666908911565!5m2!1sen!2sca" width="900" height="650" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    <Footer/>
    </div>
   
  );
};

export default ContactUs;
