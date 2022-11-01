import React from "react";
import { NavLink } from "react-router-dom";
import "../../Admin.css";

const Sidebar = () => {
  return (
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
              <span className="block m-t-xs font-bold">Admin</span>
            </a>
          </li>
          <li>
            <NavLink to="/admin">
              <a href="#">
                <i className="fa fa-home"></i>{" "}
                <span className="nav-label">Home</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mealplan">
              <a href="#">
                <i className="fa fa-home"></i>{" "}
                <span className="nav-label">Meal Plan</span>
              </a>
            </NavLink>
          </li>

          {/* <li className="/nav-item">
            <a
              href="#"
              onclick="event.preventDefault();document.getElementById('logout-form').submit();"
              className="nav-label d-flex align-items-center"
            >
              <i className="fas fa-sign-out-alt"></i> &nbsp;&nbsp;
              <span>Log Out</span>
            </a>
            @include('forms.logout')
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
