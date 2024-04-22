import React from "react";
import "./App.css";
import pokemon from "./pokemon.json";
import { PokemonRow } from "./components/PokemonRow";

function App() {
  const [filter, setFilter] = React.useState("");

  return (
    <div
      style={{
        margin: "auto",
        width: "800",
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon search</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
        <div>
          <input value={filter} onChange={(e) => setFilter(e.target.value)} />
          <table width="100%">
            <thead>
              <tr>
                <th>Pokemon</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow key={pokemon.id} pokemon={pokemon} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
