import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants, toggleSoldOut }) {
  const [search, setSearch] = useState("")
const filteredPlants = plants.filter((plant) =>
plant.name.toLowerCase().includes(search.toLowerCase())
)
const handleAddPlant = (newPlant) => {
  setPlants([...plants, newPlant]);
}
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants} toggleSoldOut={toggleSoldOut}/>
    </main>
  );
}

export default PlantPage;
