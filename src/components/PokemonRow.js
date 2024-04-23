import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon, setSelectedItem }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelectedItem(pokemon)}
      >
        Select
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape(PokemonType).isRequired,
  onSelect: PropTypes.func,
};

export default PokemonRow;
