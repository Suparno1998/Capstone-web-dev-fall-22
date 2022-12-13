import React, { useEffect, useState } from "react";
import axios from "../../../../../utils/axios";
import { useNavigate, useParams } from "react-router";

const EditMealPlan = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [short_description, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileName, setFileName] = useState("");
  const [mealplanid, setMealPlanId] = useState("");
  const navigate = useNavigate();

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("price", price);
    formData.append("short_description", short_description);
    formData.append("description", description);
    formData.append("mealplanImage", fileName);

    axios
      .put(`/admin/update/mealplan/${id}`, formData)
      .then((res) => {
        alert("Meal Plan Updated successfully");
        navigate("/admin-home/mealplan");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(`/admin/mealplan/${id}`)
      .then((res) => {
        console.log("This is get data", res.data);
        setTitle(res.data.mealplan.title);
        setShortDescription(res.data.mealplan.short_description);
        setDescription(res.data.mealplan.description);
        setPrice(res.data.mealplan.price);
        setMealPlanId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      className="container-fluid"
      style={{
        border: "1px solid black",
        padding: "2em",
        margin: "1em",
      }}
    >
      <h2 className="add-mealplan-heading"> Update {title}</h2>
      <div className="mealplan-form">
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-item">
            <label htmlFor="title" className="title">
              Title:
            </label>
            <input
              type="text"
              name="title"
              className="title_input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="price" className="price">
              Price:
            </label>
            <input
              type="text"
              name="price"
              className="price_input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="short_description" className="short_description">
              Short Description:
            </label>
            <textarea
              className="short_description_input"
              name="short_description"
              value={short_description}
              onChange={(e) => setShortDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-item">
            <label htmlFor="description" className="description">
              Description:
            </label>
            <textarea
              className="description_input"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-item">
            <label htmlFor="file"> Choose Mealplan Image</label>
            <input
              type="file"
              fileName="mealplanImage"
              className="form-control-file"
              onChange={onChangeFile}
            />
          </div>
          <div className="form-item">
            <button type="submit" className="btn btn-success">
              {" "}
              Update Meal Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMealPlan;
