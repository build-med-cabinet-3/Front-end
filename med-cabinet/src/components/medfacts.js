import React from "react";
import styled from "styled-components";

const MedFactsContainer = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  opacity: 0.5;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export default function MedFacts() {
  return (
    <MedFactsContainer>
      <h1> Cannabis Medical Information:</h1>
      <p> Cannabis Facts </p>
    </MedFactsContainer>
  );
}
