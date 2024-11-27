import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, toggleSoldOut}) {

 const plantCards = plants.map(plantItem => <PlantCard key={plantItem.id}
 plant={plantItem} 
 toggleSoldOut={toggleSoldOut}
 />) 
  return (
    <ul className="cards">
  {plantCards}
    </ul>
  );
}

export default PlantList;
