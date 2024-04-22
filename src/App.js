import React from "react";
import "./App.css";
import pokemon from "./pokemon.json";
import { PokemonRow } from "./components/PokemonRow";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: "800",
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0, 20).map((pokemon) => (
            <PokemonRow key={pokemon.id} pokemon={pokemon} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
