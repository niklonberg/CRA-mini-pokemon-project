import React from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
  const { pokemonData, filter, setSelectedItem } =
    React.useContext(PokemonContext);

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
