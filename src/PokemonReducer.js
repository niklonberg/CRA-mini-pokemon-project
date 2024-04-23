const PokemonReducer = (state, action) => {
  switch (action) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON_DATA":
      return {
        ...state,
        pokemonData: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error("No action");
  }
};

export default PokemonReducer;
