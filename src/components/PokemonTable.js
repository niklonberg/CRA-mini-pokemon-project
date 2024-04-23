import React from "react";
import PokemonRow from "./PokemonRow";

const PokemonTable = ({ pokemonData, filter, setSelectedItem }) => {
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
              setSelectedItem={setSelectedItem}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
