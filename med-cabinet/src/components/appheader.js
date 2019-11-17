import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  color: black;
`;
const LogoCont = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export default function AppHeader() {
  return (
    <HeaderContainer>
      <LogoCont>
        <img src="../../Logo.png" alt="logo" width="40%"></img>
      </LogoCont>
    </HeaderContainer>
  );
}
