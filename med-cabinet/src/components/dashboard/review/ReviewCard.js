import React from "react";
import styled from "styled-components";

const Card = styled.div `
  display: flex;

  flex-direction: column;

  align-items: center;

  padding: 10px;

  margin-bottom: 10px;

  border: 2px solid black;
`;

const Span = styled.span `
  font-weight: bold;
`;

export default function CharacterCard(props) {
    return ( <
        Card >
        <
        h2 > { props.sName } < /h2> <
        div >
        <
        p >
        <
        Span > Review Date: < /Span> {props.date} <
        /p> <
        p >
        <
        Span > Reveiw Comments: < /Span> {props.comments} <
        /p> <
        /div> <
        /Card>
    );
}