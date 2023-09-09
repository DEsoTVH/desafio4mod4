import React, { useState } from "react";

export default function Buscador({ dataPokemon, setDataPokemon, originalDataPokemon }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (value === "") {
      // Restaurar los resultados originales cuando el campo de búsqueda esté vacío.
      setDataPokemon(originalDataPokemon);
      return;
    }

    const filtered = originalDataPokemon
      .filter((pokemon) => {
        return (
          pokemon.id.toString().includes(value) ||
          pokemon.name.toLowerCase().includes(value.toLowerCase()) ||
          pokemon.type.toLowerCase().includes(value.toLowerCase())
        );
      })
      .sort((a, b) => a.id - b.id);

    setDataPokemon(filtered);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar por ID, nombre o tipo"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}
