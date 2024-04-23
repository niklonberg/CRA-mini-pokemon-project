import React from "react";
import PokemonRow from "./PokemonRow";
import { useSelector, useDispatch } from "react-redux";

const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemonData);
  const filter = useSelector((state) => state.filter);

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
              onClick={(pokemon) =>
                dispatch({
                  type: "SET_SELECTED_POKEMON",
                  payload: pokemon,
                })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
