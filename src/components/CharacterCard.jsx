function CharacterCard({ character, onRemove }) {
  function getHouseClass(house) {
    switch (house) {
      case "Gryffindor":
        return "card gryffindor";
      case "Slytherin":
        return "card slytherin";
      case "Hufflepuff":
        return "card hufflepuff";
      case "Ravenclaw":
        return "card ravenclaw";
      default:
        return "card sem-casa";
    }
  }

  return (
    <div className={getHouseClass(character.house)}>
      {character.image && (
        <img src={character.image} alt={character.name} width={80} />
      )}
      <h3>{character.name}</h3>
      <p>Casa: {character.house || "desconhecida"}</p>
      <p>Género: {character.gender || "desconhecido"}</p>
      <button onClick={() => onRemove(character.id)}>Remover</button>
    </div>
  );
}

export default CharacterCard;