import React, { Fragment, useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap"
import "./UserProfile.css";

function UserProfile(){
    return(
        <div>
            <div>
                User profile
            </div>
            <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
                <span className="mask bg-gradient-default opacity-8"></span>
                <div class="container-fluid d-flex align-items-center">
                    <div className="row name-container">
                        <div className="col-lg-7 col-md-10">
                        <h1 className="display-2 text-white">Hello, User</h1>
                        <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                        <a href="#!" className="btn btn-info">Edit profile</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-container">
                <div className="row">
                    <p>Hello, {localStorage.getItem("email")}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
