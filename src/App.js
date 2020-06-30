import React from "react";
import styled from "styled-components";
import RightPage from "./components/RightPage";
import LeftPage from "./components/LeftPage";
import axios from "axios";

import "./App.css";

const Pokedex = styled.div`
  width: 815px;
  height: 600px;
  margin: 30px auto 0 auto;
  background-color: yellow;
  display: flex;
`;

const Divider = styled.div`
  width: 10px;
  height: 600px;
  background-color: orange;
  border: solid 1px black;
`;

class App extends React.Component {
  state = { pokemon: null };

  callApi = () => {
    console.log(1, "hello");
    const pikachu = axios
      .get("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => {
        console.log(2, response);
      });
    console.log(3, pikachu);
    setTimeout(() => {
      console.log(3.5, "wait");
    }, 1);
    console.log(4, "bye");
  };

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
      .then((response) => {
        this.setState({ pokemon: response.data });
      });
  };

  render() {
    const { pokemon } = this.state;
    console.log(pokemon);
    return (
      <Pokedex>
        <LeftPage
          name={pokemon ? pokemon.name : ""}
          id={pokemon ? pokemon.id : ""}
          sprite={pokemon ? pokemon.sprites.front_default : ""}
        />
        <Divider />
        <RightPage
          stats={pokemon ? pokemon.stats : ""}
          hp={pokemon ? pokemon.stats[0].base_stat : ""}
          attack={pokemon ? pokemon.stats[1].base_stat : ""}
          defense={pokemon ? pokemon.stats[2].base_stat : ""}
          spattack={pokemon ? pokemon.stats[3].base_stat : ""}
          spdefense={pokemon ? pokemon.stats[4].base_stat : ""}
          speed={pokemon ? pokemon.stats[5].base_stat : ""}
          typeOne={pokemon ? pokemon.types[0].type.name : ""}
          typeTwo={pokemon ? pokemon.types[1].type.name : ""}
          move={pokemon ? pokemon.moves[0].move.name : ""}
        />
      </Pokedex>
    );
  }
}

export default App;
