import React from "react";
import styled from "styled-components";

const WelcomeWrapper = styled.section`
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export default function WelcomePage() {
  return (
    <WelcomeWrapper>
      <h1> Welcome to the Med Cabinet!</h1>
    </WelcomeWrapper>
  );
}
