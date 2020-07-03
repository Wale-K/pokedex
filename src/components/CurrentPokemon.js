import React from "react";
import styled from "styled-components";
import axios from "axios";

const PokemonName = styled.div`
  justify-content: space-around;
  background-color: green;
  display: flex;
`;

const PokemonPicture = styled.img`
  height: 200px;
  width: auto;
  // margin: 20px 0 0 150px; // I need this to be in the centre.
  margin: 0 auto;
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

const MyButtons = styled.div`
  display: flex;

  justify-content: space-around;
`;

class CurrentPokemon extends React.Component {
  // state = { bio: "", currentPokemonIndex: 0 };
  state = { bio: "bio", currentPokemonId: "", currentPokemonSprite: "" };

  // getBio = () => {
  //   if (this.props.currentPokemonUrl !== "") {
  //     axios.get(this.props.currentPokemonUrl).then((response) => {
  //       this.setState({
  //         bio: response.data.flavor_text_entries[0].flavor_text,
  //       });
  //     });
  //   }
  // };

  getCurrentPokemonId = () => {
    if (this.props.currentPokemonUrl !== "") {
      axios.get(this.props.currentPokemonUrl).then((response) => {
        console.log(response.data.sprites.front_default);
        this.setState({
          currentPokemonId: response.data.id,
        });
      });
    }
  };

  getCurrentPokemonSprite = () => {
    if (this.props.currentPokemonUrl !== "") {
      axios.get(this.props.currentPokemonUrl).then((response) => {
        this.setState({
          currentPokemonSprite: response.data.sprites.front_default,
        });
      });
    }
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentPokemonUrl !== this.props.currentPokemonUrl) {
      this.getCurrentPokemonSprite();
      this.getCurrentPokemonId();
      // this.getBio();
    }
  };

  render() {
    return (
      <CurrentPokemonStyle>
        <PokemonName>
          <p>
            {this.props.renderPokemonName()} No. {this.state.currentPokemonId}
          </p>
        </PokemonName>
        <PokemonPicture
          src={
            this.state.currentPokemonSprite
              ? this.state.currentPokemonSprite
              : ""
          }
          alt={this.props.name}
        />
        <PokemonInformation>{this.state.bio}</PokemonInformation>
        <MyButtons>
          <button onClick={this.props.getPreviousPokemon}>←</button>
          <button onClick={this.props.getNextPokemon}>→</button>
        </MyButtons>
      </CurrentPokemonStyle>
    );
  }
}

export default CurrentPokemon;
