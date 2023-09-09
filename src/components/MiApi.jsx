import React, { useEffect, useState } from "react";
import Buscador from "./Buscador/Buscador";

export default function MiApi() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [originalDataPokemon, setOriginalDataPokemon] = useState([]);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const consultarApi = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const { results } = await response.json();

    const pokemones = results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const poke = await response.json();

      return {
        id: poke.id,
        name: poke.name,
        img: poke.sprites.other.dream_world.front_default,
        type: poke.types[0].type.name,
      };
    });

    const updatedDataPokemon = await Promise.all(pokemones);
    setDataPokemon(updatedDataPokemon);
    setOriginalDataPokemon(updatedDataPokemon);
  };

  useEffect(() => {
    consultarApi();
  }, [limit, offset]);

  const handlePreviousPage = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  const handleNextPage = () => {
    setOffset(offset + limit);
  };

  const showPokemons = dataPokemon.map((pokemon) => (
    <div key={pokemon.id} className="col">
      <div className="card h-100">
        <img src={pokemon.img} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{pokemon.name}</h5>
          <h5 className="card-title">ID:{pokemon.id}</h5>
        </div>
        <div className="card-footer text-center">
          <h6>
            <span className="badge bg-secondary">{pokemon.type}</span>
          </h6>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Buscador dataPokemon={dataPokemon} setDataPokemon={setDataPokemon} originalDataPokemon={originalDataPokemon} />
      <div className="row row-cols-1 row-cols-xl-5 g-3">{showPokemons}</div>
      <div className="text-center mt-3">
        <button className="btn btn-info" onClick={handlePreviousPage}>Anterior</button>
        <button className="btn btn-info" onClick={handleNextPage}>Siguiente</button>
      </div>
    </>
  );
}
