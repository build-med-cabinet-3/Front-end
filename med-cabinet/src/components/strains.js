import React from "react";
import styled from "styled-components";
import SearchForm from "./searchform";
const StrainsContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  opacity: 0.5;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export default function Strains() {
  return (
    <StrainsContainer>
      <h1> Hello $username </h1>
      <p> Browse all strains, or search by name! </p>
      <SearchForm />
    </StrainsContainer>
  );
}
