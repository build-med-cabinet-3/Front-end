import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Route } from "react-router-dom";
import WelcomePage from "./welcomepage";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Container = styled.div`
  display: flex;
`;

const DashNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
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

export default function Dashboard() {
  return (
    <Container>
      <DashNavContainer>
        <NavLink exact to="/">
          <DashNavItem>
            <i class="fas fa-home fa-3x"></i>
            <p>Home</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/ReviewList">
          <DashNavItem>
            <i class="fas fa-notes-medical fa-3x"></i>
            <p>My Reviews</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/ReviewList">
          <DashNavItem>
            <i class="fas fa-notes-medical fa-3x"></i>
            <p>Submit Review</p>
          </DashNavItem>
        </NavLink>
      </DashNavContainer>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/ReviewList" component={ReviewList} />
      <Route path="/ReviewFormt" component={ReviewForm} />
      )} />
    </Container>
  );
}
