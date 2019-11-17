import React from "react";
import styled from "styled-components";

const SymptomsContainer = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  opacity: 0.5;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export default function Symptoms() {
  return (
    <SymptomsContainer>
      <h1> Hello $username </h1>
      <p> Please Select your Symptoms below: </p>
    </SymptomsContainer>
  );
}
