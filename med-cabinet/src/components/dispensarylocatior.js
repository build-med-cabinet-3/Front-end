import React from "react";
import styled from "styled-components";

const DispesaryLocatorContainer = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  opacity: 0.5;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export default function DispesaryLocator() {
  return (
    <DispesaryLocatorContainer>
      <h1> Hello $username </h1>
      <p> Enter your Zip Code to find your nearest dispensary: </p>
    </DispesaryLocatorContainer>
  );
}
