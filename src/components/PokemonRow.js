import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import PokemonType from "../PokemonType";
import PokemonContext from "../PokemonContext";

const PokemonRow = ({ pokemon }) => {
  const { setSelectedPokemon } = React.useContext(PokemonContext);
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setSelectedPokemon(pokemon)}
        >
          Select
        </Button>
      </td>
    </tr>
  );
};

PokemonRow.propTypes = {
  pokemon: PropTypes.shape(PokemonType).isRequired,
};

export default PokemonRow;
