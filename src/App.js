import React from "react";
import "./App.css";
import styled from "@emotion/styled";

import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";

const Container = styled.div`
  padding-inline: 2rem;
  margin: auto;
  max-width: 800px;
  padding-top: 1rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.4rem;
`;

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
    <Container>
      <Title>Pokemon search</Title>
      <TwoColumnLayout>
        <div>
          <Input value={filter} onChange={(e) => setFilter(e.target.value)} />
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
      </TwoColumnLayout>
    </Container>
  );
}

// Class component version of App
// I must say, i prefer function version above!
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokemon: [],
//       filter: "",
//       selectedItem: "",
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:3000/pokemon.json")
//       .then((resp) => resp.json())
//       .then((data) => this.setState({ ...this.state, pokemon: data }));
//   }

//   handleOnSelect = (pokemon) => {
//     this.setState({ selectedItem: pokemon });
//     console.log(this.state.selectedItem.name);
//   };

//   render() {
//     return (
//       <Container>
//         <Title>Pokemon search</Title>
//         <TwoColumnLayout>
//           <div>
//             <Input
//               value={this.state.filter}
//               onChange={(e) =>
//                 this.setState({ ...this.state, filter: e.target.value })
//               }
//             />
//             <table width="100%">
//               <thead>
//                 <tr>
//                   <th>Pokemon</th>
//                   <th>Type</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.pokemon
//                   .filter((pokemon) =>
//                     pokemon.name.english
//                       .toLowerCase()
//                       .includes(this.state.filter.toLowerCase())
//                   )
//                   .slice(0, 20)
//                   .map((pokemon) => (
//                     <PokemonRow
//                       key={pokemon.id}
//                       pokemon={pokemon}
//                       onSelect={this.handleOnSelect}
//                     />
//                   ))}
//               </tbody>
//             </table>
//           </div>
//           {this.state.selectedItem && (
//             <PokemonInfo {...this.state.selectedItem} />
//           )}
//         </TwoColumnLayout>
//       </Container>
//     );
//   }
// }

export default App;
