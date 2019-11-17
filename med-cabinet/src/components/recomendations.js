import React from "react";
import styled from "styled-components";

const RecomendationsContainer = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export default function Recomendations() {
  return (
    <RecomendationsContainer>
      <h1> Hello $username </h1>
      <p> Please review your Reccomended strains below: </p>
    </RecomendationsContainer>
  );
}
