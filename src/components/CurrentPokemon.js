import React from "react";
import styled from "styled-components";
import bulbasaur from "../images/bulbasaur.png";

const PokemonName = styled.div`
  justify-content: space-around;
  background-color: green;
  display: flex;
`;

const PokemonPicture = styled.img`
  height: 100px;
  width: 100px;
  margin: 20px 0 0 150px; // I need this to be in the centre.
`;

const CurrentPokemonStyle = styled.div`
  background-color: purple;
  height: 200px;
  width: 400px;
  align-content: center;
`;

const PokemonInformation = styled.div`
  background-color: orange;
  text-align: center;
`;

const CurrentPokemon = (props) => {
  return (
    <CurrentPokemonStyle>
      <PokemonName>
        <p>{props.name}</p> <p>No. {props.id}</p>
      </PokemonName>
      <PokemonPicture src={props.sprite} alt="bulbasaur" />
      <PokemonInformation>
        Bulbasaur is a useless lettuce and nobody would pick this rubbish piece
        of salad as their starter unless they needed to complete the pokedex.
      </PokemonInformation>
    </CurrentPokemonStyle>
  );
};

export default CurrentPokemon;
