import { useState } from "react";

function CharacterForm({ onAdd }) {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("Gryffindor");
  const [gender, setGender] = useState("male");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({
      id: crypto.randomUUID(), // gera um id único
      name,
      house,
      gender,
      image: "",
    });

    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da personagem"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={house} onChange={(e) => setHouse(e.target.value)}>
        <option>Gryffindor</option>
        <option>Slytherin</option>
        <option>Hufflepuff</option>
        <option>Ravenclaw</option>
      </select>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default CharacterForm;