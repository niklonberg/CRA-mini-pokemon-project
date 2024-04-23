const PokemonReducer = (
  state = {
    pokemonData: [],
    filter: "",
    selectedPokemon: null,
  },
  { type, payload }
) => {
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
      return state;
  }
};

export default PokemonReducer;
