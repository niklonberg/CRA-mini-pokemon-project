import React from "react";
import "./App.css";

import { PokemonRow } from "./components/PokemonRow";
import { PokemonInfo } from "./components/PokemonInfo";

function App() {
  const [pokemon, setPokemon] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleOnSelect = (pokemon) => {
    setSelectedItem(pokemon);
    console.log(pokemon.name.english);
  };

  React.useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, []);

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
                  <PokemonRow
                    key={pokemon.id}
                    pokemon={pokemon}
                    onSelect={handleOnSelect}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
