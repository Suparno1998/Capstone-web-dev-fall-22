import React, { Fragment, useEffect, useState } from "react";
<<<<<<< HEAD
import { fetchData } from "../../utils/functions.js";
import {useAuthContext} from '../../utils/AuthContext.js'
import { Form, Button, Alert } from "react-bootstrap"
=======
import { useAuthContext } from "../../utils/AuthContext.js";
import { Form, Button, Alert } from "react-bootstrap";
>>>>>>> 233b152b255041881d5c6295d9db2514d1b8d31a
import "./UserProfile.css";

//const UserProfileModel = require('../../../../models/UserProfile');
//const profile = require("../../../../models/UserProfile")
<<<<<<< HEAD
function UserProfiles(props){
    const {user} = useAuthContext();
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [contactNo, setContactno] = useState("")
    const [error, setError] = useState("")
    const [hasError, setHasError] = useState(false)
    //const profileData = UserProfileModel.find("firstname":"demo");
    const {dispatch} = useAuthContext()
    const [userData, setUser] = useState([]);
    const fetchUser = async (id) => {
       const data = await fetchData('/api/profile-data')
       setFirstname(data.data.firstname)
       setLastname(data.data.lastname)
       setContactno(data.data.contactno)
    }
    useEffect(() => {
        console.log(user)
        if(user)
            fetchUser(user._id);
      },user)
=======
function UserProfiles(props) {
  const { user } = useAuthContext();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [contactNo, setContactno] = useState("");
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);
  //const profileData = UserProfileModel.find("firstname":"demo");
>>>>>>> 233b152b255041881d5c6295d9db2514d1b8d31a

  const [userData, setUser] = useState([]);
  const fetchData = async (id) => {
    const response = await fetch(`/other/profile-data?id=${id}`);
    const data = await response.json();
    console.log(data);
    setFirstname(data.data.firstname);
    setLastname(data.data.lastname);
    setContactno(data.data.contactno);
  };
  useEffect(() => {
    console.log(user);
    if (user) fetchData(user._id);
  }, user);

  const handleChange = (evt) => {
    if (evt.target.name === "firstName") {
      setFirstname(evt.target.value);
    } else if (evt.target.name === "lastName") {
      setLastname(evt.target.value);
    } else if (evt.target.name === "contactNo") {
      setContactno(evt.target.value);
    }
<<<<<<< HEAD
    const handleEdit = async (e)=>{
        e.preventDefault()
        if(firstName === ""){
            setError("Firstname is required")
            setHasError(true)
            return
        }
        if(lastName === ""){
            setError("Lastname is required")
            setHasError(true)
            return
        }
        if(contactNo === ""){
            setError("Contactno is required")
            setHasError(true)
            return
        }
        
        setError("")
        setHasError(false)
        const profileObject = {
            firstname : firstName,
            lastname : lastName,
            contactno : contactNo
        }
        console.log(profileObject)
        if(profileObject){
                const data = await fetchData('/api/profile',{
                    method : "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(profileObject)
                })
                if(data.status){
                    alert("Updated successfully")
                    console.log(data.data)
                    localStorage.setItem("user",JSON.stringify(data.data))
                    dispatch({type : "LOGIN", payload : data.data})
                }else{
                    alert("Error")
                }  
        }

        
=======
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    if (firstName === "") {
      setError("Firstname is required");
      setHasError(true);
      return;
    }
    if (lastName === "") {
      setError("Lastname is required");
      setHasError(true);
      return;
    }
    if (contactNo === "") {
      setError("Contactno is required");
      setHasError(true);
      return;
    }

    setError("");
    setHasError(false);
    const profileObject = {
      user_id: user._id,
      firstname: firstName,
      lastname: lastName,
      contactno: contactNo,
    };
    console.log(profileObject);
    if (profileObject) {
      /* const user = await UserProfileModel.create({ firstName, lastName, contactNo });
            alert("Profile Updated"); */

      const response = await fetch("/other/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileObject),
      });
      const data = await response.json();
      if (data.status) {
        alert("Updated successfully");
      } else {
        alert("Error");
      }
>>>>>>> 233b152b255041881d5c6295d9db2514d1b8d31a
    }
  };
  return (
    <div className="user-profile">
      {/* <h1>User profile data</h1>
            <h2>{userData.length}</h2>
            <ul>
                {userData && userData.length > 0 && userData.map((userObj, index) => (
                    <li key={userObj.id}>{userObj.lastname}</li>
                ))}
                {JSON.stringify(userData)}
            </ul> */}
<<<<<<< HEAD
            <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
                <span className="mask bg-gradient-default opacity-8"></span>
                <div className="container-fluid d-flex align-items-center">
                    <div className="row name-container">
                        <div className="col-lg-7 col-md-10">
                        <h1 className="display-2 text-white">Hello {user && user.firstname}, </h1>
                        <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                        {/* <a href="#!" className="btn btn-info">Edit profile</a> */}
                    </div>
                    </div>
                </div>
            </div>
            <div className="details-container">
                <div className="row">
                    <p>Hello, {user && user.firstname}</p>
                </div>
                <Form className="p-1">
                    <Alert variant="danger" show={hasError}>
                        <p>{error}</p>
                    </Alert>
                    <Form.Group className="mb-3" controlId="formLoginEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter firstname" value={firstName} onChange={handleChange} name="firstName" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLoginEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter lastname" value={lastName} onChange={handleChange} name="lastName" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLoginEmail">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="text" placeholder="Enter contactno" value={contactNo} onChange={handleChange} name="contactNo" required/>
                    </Form.Group>
                    <Button className="edit-profile-btn" variant="primary" type="submit" onClick={handleEdit}>
                        Edit Profile
                    </Button>
                </Form>
=======
      <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
        <span className="mask bg-gradient-default opacity-8"></span>
        <div className="container-fluid d-flex align-items-center">
          <div className="row name-container">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-white">
                Hello {user && user.email},{" "}
              </h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              {/* <a href="#!" className="btn btn-info">Edit profile</a> */}
>>>>>>> 233b152b255041881d5c6295d9db2514d1b8d31a
            </div>
          </div>
        </div>
      </div>
      <div className="details-container">
        <div className="row">
          <p>Hello, {localStorage.getItem("email")}</p>
        </div>
        <Form className="p-1">
          <Alert variant="danger" show={hasError}>
            <p>{error}</p>
          </Alert>
          <Form.Group className="mb-3" controlId="formLoginEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter firstname"
              value={firstName}
              onChange={handleChange}
              name="firstName"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLoginEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lastname"
              value={lastName}
              onChange={handleChange}
              name="lastName"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLoginEmail">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contactno"
              value={contactNo}
              onChange={handleChange}
              name="contactNo"
              required
            />
          </Form.Group>

          <Button
            className="edit-profile-btn"
            variant="primary"
            type="submit"
            onClick={handleEdit}
          >
            Edit Profile
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UserProfiles;
