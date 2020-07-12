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
  state = {
    pokemon: null,
    // index: 122,
    flag: true,
    spriteDisplay: "Shiny",
    species: "",
    searchInputValue: "",
    allPokemon: null,
    errorMessage: "",
    movesIndex: 0,
    gameVersion: "red",
    iscorrectVersion: true,
    gameVersionPokemon: { red: 1, gold: 152 },
  };

  componentDidMount = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/6`).then((response) => {
      this.setState({ pokemon: response.data });
      axios.get(response.data.species.url).then((secondResponse) => {
        this.setState({ species: secondResponse.data });
      });
    });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200000`)
      .then((response) => {
        this.setState({ allPokemon: response.data });
      });
  };

  setGameVersion = (colour) => {};

  resetPokemon = (arg) => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${this.state.gameVersionPokemon.red}`
      )
      .then((response) =>
        this.setState({
          pokemon: response.data,
          flag: true,
          spriteDisplay: "Shiny",
          movesIndex: 0,
        })
      );
  };

  getNextPokemon = () => {
    const nextPokemonId = this.state.pokemon.id + 1;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`)
      .then((response) => {
        this.setState({
          pokemon: response.data,
          flag: true,
          spriteDisplay: "Shiny",
          movesIndex: 0,
        });
      });
  };

  getPreviousPokemon = () => {
    const previousPokemonId = this.state.pokemon.id - 1;
    if (this.state.pokemon.id > 1) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${previousPokemonId}`)
        .then((response) => {
          this.setState({
            pokemon: response.data,
            flag: true,
            spriteDisplay: "Shiny",
            movesIndex: 0,
          });
        });
    }
  };

  toggleShiny = () => {
    if (this.state.flag === true) {
      this.setState({ flag: false, spriteDisplay: "Normal" });
    } else {
      this.setState({ flag: true, spriteDisplay: "Shiny" });
    }
  };

  handlePokemonSearch = (event) => {
    this.setState({
      searchInputValue: event.target.value,
    });
  };

  handlePokemonSearchSubmit = () => {
    if (this.state.searchInputValue !== "") {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon/${this.state.searchInputValue.toLowerCase()}`
        )
        .then((response) => {
          this.setState(
            {
              pokemon: response.data,
              searchInputValue: "",
              errorMessage: "",
              gameVersion: response.data.game_indices[0].version.name,
            },
            console.log(this.state.gameVersion)
          );
        })
        .catch((error) => {
          this.setState({
            errorMessage: "This is not a valid pokemon name or ID.",
          });
        });
    }
  };

  renderMove = () => {
    if (this.state.pokemon) {
      return this.state.pokemon.moves[this.state.movesIndex].move.name;
    }
  };

  getPreviousPokemonMove = () => {
    if (this.state.pokemon) {
      if (this.state.movesIndex !== this.state.pokemon.moves.length - 1) {
        this.setState((prevState) => {
          return { movesIndex: prevState.movesIndex + 1 };
        });
      }
    }
  };

  getNextPokemonMove = () => {
    if (this.state.movesIndex !== 0) {
      this.setState((prevState) => {
        return { movesIndex: prevState.movesIndex - 1 };
      });
    }
  };

  getPokemonMoveLevel = () => {
    if (this.state.pokemon) {
      return this.state.pokemon.moves;
    }
  };

  render() {
    const { pokemon, species } = this.state;

    return (
      <Pokedex>
        <LeftPage
          name={pokemon ? pokemon.name : ""}
          id={pokemon ? pokemon.id : ""}
          sprites={pokemon ? pokemon.sprites : {}}
          toggleShiny={this.toggleShiny}
          spriteDisplay={this.state.spriteDisplay}
          flag={this.state.flag}
          getNextPokemon={this.getNextPokemon}
          getPreviousPokemon={this.getPreviousPokemon}
          setGameVersion={this.setGameVersion}
        />
        <Divider />

        <RightPage
          stats={pokemon ? pokemon.stats : []}
          type={pokemon ? pokemon.types : []}
          moves={pokemon ? pokemon.moves : []}
          evolutionUrl={species ? species.evolution_chain.url : ""}
          searchInputValue={this.state.searchInputValue}
          handlePokemonSearch={this.handlePokemonSearch}
          handlePokemonSearchSubmit={this.handlePokemonSearchSubmit}
          errorMessage={this.state.errorMessage}
          movesIndex={this.state.movesIndex}
          renderMove={this.renderMove}
          getNextPokemonMove={this.getNextPokemonMove}
          getPreviousPokemonMove={this.getPreviousPokemonMove}
        />
      </Pokedex>
    );
  }
}

export default App;

// Next session goals:
// The arrow buttons around the pokemon number shouldn't change based on the length of the pokemon's name.
// Instead of just displaying the pokemon name, you should be able to click on it and search for the name.

// App goals:

// bio - relevant to the game version you choose.
// evolution chain sprites.
// change the moveset when the pokemon changes.
// add an input so you can search by pokemon name or id number --> Fix the errors.
