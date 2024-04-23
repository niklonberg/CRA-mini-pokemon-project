import React from "react";
import PokemonType from "../PokemonType";
import PokemonContext from "../PokemonContext";

const PokemonInfo = () => {
  const { selectedPokemon } = React.useContext(PokemonContext);

  return selectedPokemon ? (
    <div>
      <h1>{selectedPokemon.name.english}</h1>
      <table>
        <thead>
          <tr>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;
