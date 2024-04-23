import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import PokemonReducer from "./PokemonReducer";

const store = createStore(PokemonReducer);

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

function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemonData);

  React.useEffect(() => {
    fetch("http://localhost:3000/create-react-app/pokemon.json")
      .then((resp) => resp.json())
      .then((payload) =>
        dispatch({
          type: "SET_POKEMON_DATA",
          payload,
        })
      );
  }, []);

  if (!pokemonData) return <div>Loading data</div>;

  return (
    <Container>
      <Title>Pokemon search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
