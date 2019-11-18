import React from "react";
import styled from "styled-components";

const WelcomeWrapper = styled.section`
  min-height: 100%;
  min-width: 80%;
`;

export default function DashHome() {
  return (
    <WelcomeWrapper>
      <h1> Welcome to the Med Cabinet! </h1>{" "}
    </WelcomeWrapper>
  );
}
