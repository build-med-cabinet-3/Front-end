import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.section`
  display: flex;
  justify-content: flex-start;
`;
export default function AppHeader() {
  return (
    <HeaderContainer>
      <div className="LogoCont">
        <img className="logo" src="../../Logo.png" width="42%"></img>
      </div>
    </HeaderContainer>
  );
}
