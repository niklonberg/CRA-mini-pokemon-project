import React from "react";
import PokemonRow from "./PokemonRow";
import useStore from "../store";

const PokemonTable = () => {
  const pokemonData = useStore((state) => state.pokemonData);
  const filter = useStore((state) => state.filter);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Pokemon</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemonData
          .filter((pokemon) =>
            pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onClick={(pokemon) => setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
