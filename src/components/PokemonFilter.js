import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.4rem;
`;

const PokemonFilter = ({ filter, setFilter }) => {
  return (
    <Input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default PokemonFilter;
