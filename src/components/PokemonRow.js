import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon, onClick }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
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
