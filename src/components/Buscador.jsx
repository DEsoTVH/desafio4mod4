import React, { useState } from "react";

export default function Buscador({ dataPokemon, setDataPokemon }) {
  const [searchTerm, setSearchTerm] = useState("");

  // funcion para manejar los cambios live.
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // filtramos y ordenamos Pokémon en función del término de búsqueda y el ID.
    const filtered = dataPokemon
      .filter((pokemon) => {
        return (
          pokemon.id.toString().includes(value) ||
          pokemon.name.toLowerCase().includes(value.toLowerCase()) ||
          pokemon.type.toLowerCase().includes(value.toLowerCase())
        );
      })
      .sort((a, b) => a.id - b.id); // usamos el sort solicitado para ordenar por orden de las ID

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
