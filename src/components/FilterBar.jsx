function FilterBar({ houseFilter, setHouseFilter, genderFilter, setGenderFilter }) {
  return (
    <div className="filters">
      <select value={houseFilter} onChange={(e) => setHouseFilter(e.target.value)}>
        <option value="todas">Todas as casas</option>
        <option>Gryffindor</option>
        <option>Slytherin</option>
        <option>Hufflepuff</option>
        <option>Ravenclaw</option>
      </select>
      <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
        <option value="todos">Todos os géneros</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
      </select>
    </div>
  );
}

export default FilterBar;