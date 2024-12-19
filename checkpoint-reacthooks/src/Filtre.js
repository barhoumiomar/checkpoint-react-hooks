function Filtre({ onFilterChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => onFilterChange({ title: e.target.value })}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Filtrer par note"
        onChange={(e) => onFilterChange({ rating: e.target.value })}
      />
    </div>
  );
}
export default Filtre;