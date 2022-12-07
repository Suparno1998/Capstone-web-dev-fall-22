import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./Admin.css";
import AdminDashboard from "./adminPages/AdminDashboard/AdminDashboard.jsx";
import AddNewMealPlan from "./adminPages/AdminMealplan/AddNewMealPlan/AddNewMealPlan.jsx";
import AdminMealPlan from "./adminPages/AdminMealplan/AdminMealPlan.jsx";
import EditMealPlan from "./adminPages/AdminMealplan/EditMealPlan/EditMealPlan.jsx";
import AdminSlide from "./adminPages/AdminOrders/AdminOrders.jsx";
import ContactMessages from "./adminPages/ContactMessages/ContactMessages.jsx";
import ListOfUsers from "./adminPages/ListOfUsers/ListOfUsers.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
// import axios from "../../../src/utils/axios";

const Admin = () => {
  // const { recent, setRecent } = useEffect("dashboard");
  // const { mealplanId } = useParams();
  // const [mealplan, setMealPlan] = useState("");

  // useEffect(() => {
  //   fetchmealplan(mealplanId);
  // }, []);

  // const fetchmealplan = async (id) => {
  //   const data = await axios.get(`/admin/mealplan/${id}`);
  //   setMealPlan(data);
  // };

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
            <Route path="/add/mealplan" element={<AddNewMealPlan />} />

            <Route path="/update/mealplan/:id" element={<EditMealPlan />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Admin;
