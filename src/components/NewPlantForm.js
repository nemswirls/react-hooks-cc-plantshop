import React, { useState } from "react";
const initialState= {
  name: "",
  image: "",
  price: "",
}
function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState(initialState)
  const handleSubmit = (e) => {
  e.preventDefault();
  fetch("http://localhost:6001/plants", {
  method: "POST",
  headers: {
    "Content-Type": "Application/JSON",
  },
  body: JSON.stringify(formData),
  } )
  .then((response) => response.json())
  .then(onAddPlant)
  setFormData({ name:"", image:"", price: ""});
 
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
         name={formData.name}
          placeholder="Plant name" 
          onChange={(e) => setFormData({ ...formData, name: e.target.value})}/>
        <input type="text"
         name={formData.image}
         placeholder="Image URL"
         onChange={(e) => setFormData({ ...formData, image: e.target.value})}/>
        <input type="number"
        name={formData.price}
        step="0.01"
        placeholder="Price"
        onChange={(e) => setFormData({ ...formData, price: e.target.value})}   />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
