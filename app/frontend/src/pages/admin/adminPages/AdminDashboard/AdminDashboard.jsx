import React from "react";
import "../AdminDashboard/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <div className="col-lg-4 first-top">
        <div className="dashboard-top">
          <i class="fa fa-utensils"></i>
          <h3>Meal Plans</h3>
        </div>
        <h1>6</h1>
      </div>
      <div className="col-lg-4 second-top">
        <div className="dashboard-top">
          <i class="fa fa-users"></i>
          <h3>Users</h3>
        </div>
        <h1>10</h1>
      </div>
      <div className="col-lg-4 third-top">
        <div className="dashboard-top">
          <i class="fa fa-message"></i>
          <h3>Messages</h3>
        </div>
        <h1>102</h1>
      </div>
      <div className="col-lg-4 fourth-top">
        <div className="dashboard-top">
          <i class="fa fa-user"></i>
          <h3>Subscribers</h3>
        </div>
        <h1>8</h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
