import React from "react";
import styled from "styled-components";
import Moves from "./Moves";
import EvolutionChain from "./EvolutionChain";
import axios from "axios";

const RightPageStyle = styled.div`
  border: solid 1px black;
  width: 400px;
  height: 600px;
  background-color: red;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

const BaseInformation = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Types = styled.div`
  background-color: teal;
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;

  border-radius: 0 10px 0 0;
`;

const BasicInfo = styled.div`
  display: flex;
`;

class RightPage extends React.Component {
  state = { pokemonIndex: 0, stats: [], type: [] };

  getBaseStat = () => {
    if (this.props.currentPokemonUrl !== "") {
      axios.get(this.props.currentPokemonUrl).then((response) => {
        this.setState({
          stats: response.data.stats,
        });
      });
    }
  };

  getType = () => {
    if (this.props.currentPokemonUrl !== "") {
      axios.get(this.props.currentPokemonUrl).then((response) => {
        this.setState({
          type: response.data.types,
        });
      });
    }
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentPokemonUrl !== this.props.currentPokemonUrl) {
      this.getBaseStat();
      this.getType();
    }
  };

  render() {
    return (
      <RightPageStyle>
        <BasicInfo>
          <BaseInformation>
            {this.state.stats.map((baseStat) => {
              return (
                <div key={baseStat.stat.name}>
                  <p>{baseStat.stat.name}</p>
                  <p>{baseStat.base_stat}</p>
                </div>
              );
            })}
          </BaseInformation>
          <Types>
            <p>Type</p>
            {this.state.type.map((type) => {
              return <p key={type.type.name}>{type.type.name}</p>;
            })}
          </Types>
        </BasicInfo>
        <EvolutionChain />
        <Moves moves={this.props.moves} />
      </RightPageStyle>
    );
  }
}

export default RightPage;
