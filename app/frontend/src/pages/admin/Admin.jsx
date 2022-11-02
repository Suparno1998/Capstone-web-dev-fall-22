import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../homepage/HomePage.jsx";
import "./Admin.css";

import Sidebar from "./components/sidebar/Sidebar.jsx";

const Admin = () => {
  return (
    <div id="wrapper">
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu">
            <li className="nav-header">
              <a
                className="nav-link pr-0 text-white"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="block m-t-xs font-bold">Admin Name</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-home"></i>{" "}
                <span className="nav-label">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-cog "></i>{" "}
                <span className="nav-label">Slides</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-cog "></i>{" "}
                <span className="nav-label">Our Meal Plan</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-blog "></i>{" "}
                <span className="nav-label">List of Users</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-cog "></i>{" "}
                <span className="nav-label">Newsletter Subscriber</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-blog "></i>{" "}
                <span className="nav-label">Setting</span>
              </a>
            </li>
            <li className="/nav-item">
              <a
                href="#"
                onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                className="nav-label d-flex align-items-center"
              >
                <i className="fas fa-sign-out-alt"></i> &nbsp;&nbsp;
                <span>Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="page-wrapper" className="gray-bg dashboard-1">
        <div className="container">
          <a
            className="navbar-minimalize minimalize-styl-2 btn btn-primary "
            href="#"
          >
            <i class="fa fa-bars"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;
