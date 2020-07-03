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
  state = { pokemon: null, allPokemon: null, currentPokemonIndex: 600 };

  // componentDidMount = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
  //     .then((response) => {
  //       this.setState({ pokemon: response.data });
  //     });
  // };
  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=984")
      .then((response) => {
        this.setState({ allPokemon: response.data });
      });
  };

  renderPokemonName = () => {
    if (this.state.allPokemon !== null) {
      if (this.state.allPokemon.results !== undefined) {
        return this.state.allPokemon.results[this.state.currentPokemonIndex]
          .name;
      }
    }
  };

  getNextPokemon = () => {
    if (
      this.state.currentPokemonIndex !==
      this.state.allPokemon.results.length - 1
    )
      this.setState((prevState) => {
        return { currentPokemonIndex: prevState.currentPokemonIndex + 1 };
      });
  };

  getPreviousPokemon = () => {
    if (this.state.currentPokemonIndex !== 0) {
      this.setState((prevState) => {
        return { currentPokemonIndex: prevState.currentPokemonIndex - 1 };
      });
    }
  };

  render() {
    const { pokemon } = this.state;
    const { allPokemon } = this.state;

    return (
      <Pokedex>
        <LeftPage
          allPokemon={allPokemon ? allPokemon : ""}
          name={pokemon ? pokemon.name : ""}
          sprite={pokemon ? pokemon.sprites.front_default : ""}
          bio={pokemon ? pokemon.species.url : ""}
          renderPokemonName={this.renderPokemonName}
          getNextPokemon={this.getNextPokemon}
          getPreviousPokemon={this.getPreviousPokemon}
          currentPokemonIndex={this.state.currentPokemonIndex}
          currentPokemonUrl={
            allPokemon
              ? allPokemon.results[this.state.currentPokemonIndex].url
              : ""
          }
        />
        <Divider />
        <RightPage
          stats={pokemon ? pokemon.stats : []}
          type={pokemon ? pokemon.types : []}
          moves={pokemon ? pokemon.moves : ""}
        />
      </Pokedex>
    );
  }
}

export default App;
