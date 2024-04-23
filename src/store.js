import { create } from "zustand";

const useStore = create((set) => ({
  pokemonData: [],
  filter: "",
  selectedPokemon: null,
  setPokemonData: (pokemon) =>
    set((state) => ({
      ...state,
      pokemon,
    })),
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
    })),
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({
      ...state,
      selectedPokemon,
    })),
}));

fetch("http://localhost:3000/create-react-app/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemonData) =>
    useStore.setState((state) => ({
      ...state,
      pokemonData,
    }))
  );

export default useStore;
