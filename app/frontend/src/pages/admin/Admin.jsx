import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./Admin.css";
import AdminDashboard from "./adminPages/AdminDashboard/AdminDashboard.jsx";
import AdminMealPlan from "./adminPages/AdminMealplan/AdminMealPlan.jsx";
import AdminSlide from "./adminPages/AdminOrders/AdminOrders.jsx";
import ContactMessages from "./adminPages/ContactMessages/ContactMessages.jsx";
import ListOfUsers from "./adminPages/ListOfUsers/ListOfUsers.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

const Admin = () => {
  // const { recent, setRecent } = useEffect("dashboard");

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="page-wrapper" className="gray-bg dashboard-1">
        <div className="container-fluid">
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/orders" element={<AdminSlide />} />
            <Route path="/mealplan" element={<AdminMealPlan />} />
            <Route path="/listofusers" element={<ListOfUsers />} />
            <Route path="/contactmessages" element={<ContactMessages />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
