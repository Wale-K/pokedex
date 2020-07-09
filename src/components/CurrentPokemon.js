import React from "react";
import styled from "styled-components";
import axios from "axios";

const PokemonName = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: green;
  text-transform: capitalize;
`;

const NormalSpriteStyle = styled.img`
  height: 200px;
  width: auto;
  margin: 0 auto;
`;

const ShinySpriteStyle = styled.img`
  height: 200px;
  width: auto;
  margin: 0 auto;
  // display: none;
`;

const CurrentPokemonStyle = styled.div`
  background-color: purple;
  width: 400px;
  align-content: center;
  display: flex;
  flex-direction: column;
`;

const PokemonInformation = styled.div`
  background-color: orange;
  text-align: center;
`;

const ShinyButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 0 auto;
`;

const NormalButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 0 auto;
  display: none;
`;

class CurrentPokemon extends React.Component {
  state = {
    bio: "bio",
  };

  componentDidUpdate = (prevProps) => {
    // if (prevProps.currentPokemonUrl !== this.props.currentPokemonUrl) {
    //   this.getCurrentPokemonId();
    // }
  };

  render() {
    return (
      <CurrentPokemonStyle>
        <PokemonName>
          <p>{this.props.name.split("-").join(". ")}</p>
          <p>No. {this.props.id}</p>
        </PokemonName>
        <NormalSpriteStyle
          src={
            this.props.flag
              ? this.props.sprites.front_default
              : this.props.sprites.front_shiny
          }
          alt={this.props.name}
        />

        <PokemonInformation>{this.state.bio}</PokemonInformation>

        <ShinyButton onClick={this.props.toggleShiny}>
          {this.props.spriteDisplay} Version
        </ShinyButton>
      </CurrentPokemonStyle>
    );
  }
}

export default CurrentPokemon;

// getBio = () => {
//   if (this.props.currentPokemonUrl !== "") {
//     axios.get(this.props.currentPokemonUrl).then((response) => {
//       this.setState({
//         bio: response.data.flavor_text_entries[0].flavor_text,
//       });
//     });
//   }
// };
