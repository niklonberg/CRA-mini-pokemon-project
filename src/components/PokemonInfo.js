import React from "react";
import PropTypes from "prop-types";

export const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
  </div>
);

PokemonInfo.propTypes = {
  name: PropTypes.shape({ english: PropTypes.string }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};
