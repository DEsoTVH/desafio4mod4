import React, { useEffect, useState } from "react";
import Buscador from "./Buscador";

export default function MiApi() {
  const API_HOST = "https://pokeapi.co/api/v2/pokemon?limit=649";
  const [dataPokemon, setDataPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const consultarApi = async () => {
    const response = await fetch(API_HOST);
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
    setDataPokemon(await Promise.all(pokemones));
    setFilteredPokemon(await Promise.all(pokemones));
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const showPokemons = filteredPokemon.map((pokemon) => (
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
      <Buscador dataPokemon={dataPokemon} setDataPokemon={setFilteredPokemon} />
      <div className="row row-cols-1 row-cols-xl-5 g-3">{showPokemons}</div>
    </>
  );
}