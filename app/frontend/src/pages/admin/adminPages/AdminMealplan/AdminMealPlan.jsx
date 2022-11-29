import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "../../../../../src/utils/axios";
import AddNewMealPlan from "./AddNewMealPlan/AddNewMealPlan.jsx";
import "../AdminMealplan/AdminMealPlan.css";

const AdminMealPlan = () => {
  const [mealplans, setMealPlans] = useState("");

  useEffect(() => {
    fetchmealplans();
  }, []);

  const fetchmealplans = async () => {
    const data = await axios.get("/admin/mealplans");
    console.log("mealplans >>>>>", data);
    setMealPlans(data);
  };

  const deletemealplan = async (id) => {
    const result = await axios
      .delete("/admin/mealplan/delete/" + id)
      .then((result) => {
        fetchmealplans();
      })
      .catch(() => {
        alert("Could not delete this meal plan");
      });
  };

  return (
    <div className="subscriber-list">
      <h1>List of MealPlans</h1>
      <Link to="/admin-home/add/mealplan" className="btn btn-success">
        Add New Meal
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th scope="col">Title</th>
            <th scope="col">short_description</th>
            <th scope="col">description</th>
            <th scope="col">price</th>
            <th scope="col">Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mealplans &&
            mealplans?.data.map((mealplan) => {
              return (
                <tr>
                  <td>{mealplan._id}</td>
                  <td>{mealplan.title}</td>
                  <td>{mealplan.short_description}</td>
                  <td>{mealplan.description}</td>
                  <td>{mealplan.price}</td>
                  <td className="mealplan-img">
                    <img
                      src={`/uploads/${mealplan.mealplanImage}`}
                      alt="Meal Plan Image"
                    />
                  </td>
                  <td>
                    <Link
                      className="btn btn-danger"
                      to=""
                      onClick={() => deletemealplan(mealplan._id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMealPlan;
