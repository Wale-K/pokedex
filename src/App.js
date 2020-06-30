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
          stats={pokemon ? pokemon.stats : []}
          types={pokemon ? pokemon.type : []}
        />
      </Pokedex>
    );
  }
}

export default App;
