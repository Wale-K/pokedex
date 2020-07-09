import React from "react";
import styled from "styled-components";
import Camera from "./Camera";
// import Screen from "./Screen";
import LeftButtons from "./LeftButtons";
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
  return (
    <>
      <LeftPageStyle>
        <Camera />
        <CurrentPokemon
          // currentPokemonData={props.currentPokemonData}
          bio={props.bio}
          // renderPokemonName={props.renderPokemonName}
          // currentPokemonIndex={props.currentPokemonIndex}

          id={props.id}
          name={props.name}
          sprites={props.sprites}
          toggleShiny={props.toggleShiny}
          spriteDisplay={props.spriteDisplay}
          flag={props.flag}
        />

        <LeftButtons />
      </LeftPageStyle>
    </>
  );
};

export default LeftPage;
