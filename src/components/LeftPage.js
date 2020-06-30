import React from "react";
import styled from "styled-components";
import Camera from "./Camera";
// import Screen from "./Screen";
import LeftButtons from "./LeftButtons";
import plusImage from "../images/plus.png";
import CurrentPokemon from "./CurrentPokemon";

const LeftPageStyle = styled.div`
  border: solid 1px black;
  width: 400px;
  height: 600px;
  background-color: red;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
`;

const PlusImageStyle = styled.img`
  height: 52px;
  width: 52px;
`;

const LeftPage = (props) => {
  console.log(props.name);
  return (
    <>
      <LeftPageStyle>
        <Camera />
        <CurrentPokemon name={props.name} id={props.id} sprite={props.sprite} />

        <LeftButtons />
      </LeftPageStyle>
    </>
  );
};

export default LeftPage;
