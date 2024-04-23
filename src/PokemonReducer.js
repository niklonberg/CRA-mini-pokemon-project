const PokemonReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: payload,
      };
    case "SET_POKEMON_DATA":
      return {
        ...state,
        pokemonData: payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: payload,
      };
    default:
      console.log("No action");
  }
};

export default PokemonReducer;
