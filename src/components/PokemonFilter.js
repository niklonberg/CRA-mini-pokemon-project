import React from "react";
import styled from "@emotion/styled";
import useStore from "../store";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.4rem;
`;

const PokemonFilter = () => {
  const setFilter = useStore((state) => state.setFilter);
  const filter = useStore((state) => state.filter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default PokemonFilter;
