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

export default useStore;
