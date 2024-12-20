import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

const [plants, setPlants] = useState([]);

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(response => response.json())
  .then(setPlants)
}, [])
const toggleSoldOut = (id) => {
  setPlants((prevPlants) =>
    prevPlants.map((plant) =>
      plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
    )
  );
};
const deletePlant = (id) => {
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "DELETE",
  }).then(() =>
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id))
  );
};
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} 
      setPlants={setPlants} 
      toggleSoldOut={toggleSoldOut} 
      deletePlant={deletePlant}/>
    </div>
  );
}

export default App;
