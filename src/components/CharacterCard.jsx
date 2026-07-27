function CharacterCard({ character, onRemove }) {
  return (
    <div className="card">
      {character.image && <img src={character.image} alt={character.name} width={80} />}
      <h3>{character.name}</h3>
      <p>Casa: {character.house || "desconhecida"}</p>
      <p>Género: {character.gender || "desconhecido"}</p>
      <button onClick={() => onRemove(character.id)}>Remover</button>
    </div>
  );
}

export default CharacterCard;