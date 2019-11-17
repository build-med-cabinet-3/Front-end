import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Route } from "react-router-dom";
import WelcomePage from "./welcomepage";
import Symptoms from "./symptoms";
import Recomendations from "./recomendations";
import Strains from "./strains";
import MedFacts from "./medfacts";
import DispesaryLocator from "./dispensarylocatior";
import SearchForm from "./searchform";

const Dashboard = styled.div`
  display: flex;
`;

const DashNavContainer = styled.div`
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
  const [strainToSearch, setStrainToSearch] = useState();
  return (
    <Dashboard>
      <DashNavContainer>
        <NavLink exact to="/">
          <DashNavItem>
            <i class="fas fa-home fa-3x"></i>
            <p>Home</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/symptoms">
          <DashNavItem>
            <i class="fas fa-notes-medical fa-3x"></i>
            <p>My Symptoms</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/recomendations">
          <DashNavItem>
            <i class="fas fa-prescription-bottle-alt fa-3x"></i>
            <p>My Recomendations</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/strains">
          <DashNavItem>
            <i class="fas fa-cannabis fa-3x"></i>
            <p>Browse Strains</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/dispensary">
          <DashNavItem>
            <i class="fas fa-clinic-medical fa-3x"></i>
            <p>Dispensary Locator</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/medfacts">
          <DashNavItem>
            <i class="fas fa-book-medical fa-3x"></i>
            <p>Cannabis Medical Facts</p>
          </DashNavItem>
        </NavLink>
      </DashNavContainer>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/symptoms" component={Symptoms} />
      <Route path="/recomendations" component={Recomendations} />
      <Route
        path="/strains"
        render={props => (
          <Strains
            {...props}
            strainToSearch={strainToSearch}
            setStrainToSearch={setStrainToSearch}
          />
        )}
      />
      <Route path="/dispensary" component={DispesaryLocator} />
      <Route path="/medfacts" component={MedFacts} />
    </Dashboard>
  );
}
