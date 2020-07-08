import React from "react";
import styled from "styled-components";
import bulbasaur from "../images/bulbasaur.png";
import ivysaur from "../images/ivysaur.png";
import venasaur from "../images/venasaur.png";
import arrow from "../images/arrow.png";
import axios from "axios";

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

// getSprite = () => {
//   if (this.props.sprites !== {}) {
//     axios.get(this.props.sprites).then((response) => {
//       this.setState({
//         sprite: response.data.front_default,
//       });
//     });
//   }
// };

class EvolutionChain extends React.Component {
  state = { evolutionInfo: {}, pokemons: [] };

  componentDidUpdate = (prevProps) => {
    if (prevProps.evolutionUrl !== this.props.evolutionUrl) {
      //   this.getEvolutionChain();
    }
  };

  //   getEvolutionChain = () => {
  //     axios.get(this.props.evolutionUrl).then((response) => {
  //       this.setState({ evolutionInfo: response.data }, () => {
  //         this.getPokemon(this.state.evolutionInfo.chain);
  //       });
  //     });
  //   };

  //   getPokemon = (pokemon) => {
  //     if (pokemon.species.name) {
  //       this.setState((prevState) => {
  //         return {
  //           pokemons: [...prevState.pokemons, { name: pokemon.species.name }],
  //         };
  //       });
  //       if (pokemon.evolves_to && pokemon.evolves_to.length > 0) {
  //         this.getPokemon(pokemon.evolves_to);
  //       }
  //     }
  //   };

  renderPokemonName = () => {
    return this.state.pokemons.map((elem) => {
      return <p key={elem.name}>{elem.name}</p>;
    });
  };

  render() {
    console.log(this.state);
    return (
      <EvolutionChainStyle>
        {this.renderPokemonName()}
        {/* <IndividualPokemon>
          <img src={bulbasaur} alt="bulbasaur" />
          <p></p>
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
        </IndividualPokemon> */}
      </EvolutionChainStyle>
    );
  }
}

export default EvolutionChain;
