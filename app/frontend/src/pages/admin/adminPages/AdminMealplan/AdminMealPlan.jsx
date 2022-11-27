import React, {useState} from "react";

const AdminMealPlan =()=>{
    const [productImg, setProductImg] = useState("");
    const [createStatus, setCreateStatus] = useState(false)
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
   
    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
    
        TransformFileData(file);
      };
    
      const TransformFileData = (file) => {
        const reader = new FileReader();
    
        if (file) {
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            setProductImg(reader.result);
          };
        } else {
          setProductImg("");
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        dispatch(
          productsCreate({
            name,
            price,
            desc,
            image: productImg,
          })
        );
      };

return(
<div>
      <form onSubmit={handleSubmit}>
        <h3>Create a Meal Plan</h3>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleProductImageUpload}
          required
        />
        
        <input
          type="text"
          placeholder="Meal Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Short Description"
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <button type="submit">
          {createStatus === "pending" ? "Submitting" : "Submit"}
        </button>
      </form>
      <div>
        {productImg ? (
          <>
            <img src={productImg} alt="error!" />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </div>
    </div>
  );

}

export default AdminMealPlan;