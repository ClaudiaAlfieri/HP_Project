import { useState, useEffect } from "react";
import CharacterForm from "./components/CharacterForm";
import FilterBar from "./components/FilterBar";
import CharacterCard from "./components/CharacterCard";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("todas");
  const [genderFilter, setGenderFilter] = useState("todos");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.slice(0, 20));
      })
      .catch((err) => console.error("Erro ao ir buscar dados:", err));
  }, []);

  function handleRemove(id) {
    setCharacters(characters.filter((c) => c.id !== id));
  }

  function handleAdd(newCharacter) {
    setCharacters([newCharacter, ...characters]);
  }

  const filteredCharacters = characters.filter((c) => {
    const matchHouse = houseFilter === "todas" || c.house === houseFilter;
    const matchGender = genderFilter === "todos" || c.gender === genderFilter;
    return matchHouse && matchGender;
  });

  return (
    <div className="app">
      <h1>Catálogo Harry Potter</h1>
      <CharacterForm onAdd={handleAdd} />
      <FilterBar
        houseFilter={houseFilter}
        setHouseFilter={setHouseFilter}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
      />
      <div className="grid">
        {filteredCharacters.map((c) => (
          <CharacterCard key={c.id} character={c} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}

export default App;