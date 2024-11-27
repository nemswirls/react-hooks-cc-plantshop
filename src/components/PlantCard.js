import React from "react";

function PlantCard({plant: {id, name, image, price, soldOut }, toggleSoldOut, deletePlant}) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className= "primary" onClick={() => toggleSoldOut(id)}>
      {soldOut ? "Out of Stock" : "In Stock"}
      </button>
      <button onClick={() => deletePlant(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
