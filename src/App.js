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

  getNextPokemon = () => {
    const nextPokemonId = this.state.pokemon.id + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`)
      .then((response) => {
        this.setState({
          pokemon: response.data,
          flag: true,
          spriteDisplay: "Shiny",
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
          this.setState({
            pokemon: response.data,
            flag: true,
            spriteDisplay: "Shiny",
            searchInputValue: "",
          });
        });
    }
  };

  render() {
    const { pokemon, species } = this.state;

    return (
      <Pokedex>
        <LeftPage
          name={pokemon ? pokemon.name : ""}
          getNextPokemon={this.getNextPokemon}
          getPreviousPokemon={this.getPreviousPokemon}
          id={pokemon ? pokemon.id : ""}
          sprites={pokemon ? pokemon.sprites : {}}
          toggleShiny={this.toggleShiny}
          spriteDisplay={this.state.spriteDisplay}
          flag={this.state.flag}
        />
        <Divider />

        <RightPage
          stats={pokemon ? pokemon.stats : []}
          type={pokemon ? pokemon.types : []}
          moves={pokemon ? pokemon.moves : ""}
          evolutionUrl={species ? species.evolution_chain.url : ""}
          searchInputValue={this.state.searchInputValue}
          handlePokemonSearch={this.handlePokemonSearch}
          handlePokemonSearchSubmit={this.handlePokemonSearchSubmit}
        />
      </Pokedex>
    );
  }
}

export default App;

// bio - relevant to the game version you choose.
// evolution chain sprites.
// change the moveset when the pokemon changes.
// add an input so you can search by pokemon name or id number.

// class ControlledInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     // change code below this line
// this.handleChange = this.handleChange.bind(this)
//     // change code above this line
//   }
//   // change code below this line
// handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
// }
//   // change code above this line
//   render() {
//     return (
//       <div>
//         { /* change code below this line */}
// <input value = {this.state.input} onChange = {this.handleChange.bind(this)}/>

//         { /* change code above this line */}
//         <h4>Controlled Input:</h4>
//         <p>{this.state.input}</p>
//       </div>
//     );
//   }
// };
