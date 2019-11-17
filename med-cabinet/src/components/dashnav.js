import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DashNavContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background-color: #058a17;
  width: 20vw;
  border-bottom-right-radius: 50px;
  min-height: 70vh;
`;
const DashNavItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 50px;
  border: 0px solid black;
  color: black;
  margin: 0.3em;
  padding: 1em;
  font-weight: bold;
  text-decoration: none;
  min-width: 90%;
  cursor: pointer;
  i {
    text-decoration: none;
  }
`;

export default function DashNav() {
  return (
    <DashNavContainer>
      <NavLink exact to="/">
        <DashNavItem>
          <i class="fas fa-home fa-3x"></i>
          Home
        </DashNavItem>
      </NavLink>
      <NavLink to="/mysymptoms">
        <DashNavItem>
          <i class="fas fa-notes-medical fa-3x"></i>
          My Symptoms
        </DashNavItem>
      </NavLink>
      <NavLink to="/recomendations">
        <DashNavItem>
          <i class="fas fa-prescription-bottle-alt fa-3x"></i>
          My Recomendations
        </DashNavItem>
      </NavLink>
      <NavLink to="/strains">
        <DashNavItem>
          <i class="fas fa-cannabis fa-3x"></i>
          Browse Strains
        </DashNavItem>
      </NavLink>
      <NavLink to="/dispensary">
        <DashNavItem>
          <i class="fas fa-clinic-medical fa-3x"></i>
          Dispensary Locator
        </DashNavItem>
      </NavLink>
      <NavLink to="/medfacts">
        <DashNavItem>
          <i class="fas fa-book-medical fa-3x"></i>
          Cannabis Medical Facts
        </DashNavItem>
      </NavLink>
    </DashNavContainer>
  );
}
