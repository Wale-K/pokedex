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
  state = { pokemon: null, index: 6 };

  componentDidMount = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/6`).then((response) => {
      this.setState({ pokemon: response.data });
    });
  };

  // renderPokemonName = () => {
  //   if (this.state.pokemon !== null) {
  //     if (this.state.pokemon.results !== undefined) {
  //       return this.state.pokemon.results.name;
  //     }
  //   }
  // };

  getNextPokemon = () => {
    const nextPokemonId = this.state.pokemon.id + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`)
      .then((response) => {
        this.setState({ pokemon: response.data });
      });
  };

  getPreviousPokemon = () => {
    const previousPokemonId = this.state.pokemon.id - 1;
    if (this.state.pokemon.id > 1) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${previousPokemonId}`)
        .then((response) => {
          this.setState({ pokemon: response.data });
        });
      console.log(this.state.pokemon.name);
    }
  };

  render() {
    const { pokemon } = this.state;
    // console.log(pokemon ? pokemon.id + 3 : "no");

    return (
      <Pokedex>
        <LeftPage
          // bio={pokemon ? pokemon.species.url : ""}
          name={pokemon ? pokemon.name : ""}
          getNextPokemon={this.getNextPokemon}
          getPreviousPokemon={this.getPreviousPokemon}
          id={pokemon ? pokemon.id : ""}
          sprites={pokemon ? pokemon.sprites : {}}
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

// display a button that allows you to see the shiny version of a pokemon.
// bio - relevant to the game version you choose.
// evolution chain sprites.
// change the moveset when the pokemon changes.
// add an input so you can search by pokemon name or id number.
