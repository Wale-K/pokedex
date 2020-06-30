import React from "react";
import styled from "styled-components";
import bulbasaur from "../images/bulbasaur.png";
import ivysaur from "../images/ivysaur.png";
import venasaur from "../images/venasaur.png";
import arrow from "../images/arrow.png";

const EvolutionChainStyle = styled.div`
  div + img {
    height: 30px;
    width: 30px;
    margin: 40px 5px 0 5px;
  }

  img {
    height: 100px;
    width: 100px;
  }
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin-bottom: 20px;
`;

const IndividualPokemon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const EvolutionChain = (props) => {
  return (
    <EvolutionChainStyle>
      <IndividualPokemon>
        <img src={bulbasaur} alt="bulbasaur" />
        <p>bulbasaur</p>
      </IndividualPokemon>
      <img src={arrow} />
      <IndividualPokemon>
        <img src={ivysaur} alt="ivysaur" />
        <p>ivysaur</p>
      </IndividualPokemon>
      <img src={arrow} />
      <IndividualPokemon>
        <img src={venasaur} alt="venasaur" />
        <p>venasaur</p>
      </IndividualPokemon>
    </EvolutionChainStyle>
  );
};

export default EvolutionChain;
