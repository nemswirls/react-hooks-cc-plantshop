import React from "react";

function PlantCard({plant: {id, name, image, price, soldOut  }, toggleSoldOut}) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className= "primary" onClick={() => toggleSoldOut(id)}>
      {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
