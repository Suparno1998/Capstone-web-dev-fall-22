import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../../../utils/useLogout";
import "../../Admin.css";

const Sidebar = () => {

  const { logout } = useLogout();
  
  const handleLogout = () => {
    window.location.href = "/";
    logout();
  };

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
            <Link to="/admin-home/dashboard">
              <i className="fa fa-home"></i>{" "}
              <span className="nav-label">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-home/orders">
              <i className="fa fa-cog "></i>{" "}
              <span className="nav-label">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-home/mealplan">
              <i className="fa fa-cog "></i>{" "}
              <span className="nav-label">Our Meal Plan</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-home/listofusers">
              <i class="fa fa-blog "></i>{" "}
              <span className="nav-label">Users</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-home/contactmessages">
              <i class="fa fa-blog "></i>{" "}
              <span className="nav-label">Contact Messages</span>
            </Link>
          </li>
          <li className="/nav-item">
            <a href="#" className="nav-label d-flex align-items-center" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
