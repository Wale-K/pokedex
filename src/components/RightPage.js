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
  text-transform: capitalize;
`;

const Types = styled.div`
  background-color: teal;
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  text-transform: capitalize;
  border-radius: 0 10px 0 0;
`;

const BasicInfo = styled.div`
  display: flex;
`;

const SearchStyle = styled.div`
  width: 400px;
  // background-color: orange;
  display: flex;
  input {
    width: 290px;
  }
  justify-content: space-between;
`;

class RightPage extends React.Component {
  state = { pokemonIndex: 0, stats: [], type: [] };

  getBaseStat = () => {
    if (this.props.pokemon !== "") {
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

  test = () => {
    console.log(this.props.searchInputValue);
  };

  // componentDidUpdate = (prevProps) => {};

  render() {
    return (
      <RightPageStyle>
        <BasicInfo>
          <BaseInformation>
            {this.props.stats.map((baseStat) => {
              if (baseStat.stat.name.length < 3) {
                return (
                  <div key={baseStat.stat.name}>
                    <p>{baseStat.stat.name.toUpperCase()}</p>
                    <p>{baseStat.base_stat}</p>
                  </div>
                );
              } else
                return (
                  <div key={baseStat.stat.name}>
                    <p>{baseStat.stat.name.split("-").join(" ")}</p>
                    <p>{baseStat.base_stat}</p>
                  </div>
                );
            })}
          </BaseInformation>
          <Types>
            <p>Type</p>
            {this.props.type.map((type) => {
              return <p key={type.type.name}>{type.type.name}</p>;
            })}
          </Types>
        </BasicInfo>
        <EvolutionChain evolutionUrl={this.props.evolutionUrl} />
        <Moves
          renderMove={this.props.renderMove}
          getNextPokemonMove={this.props.getNextPokemonMove}
          getPreviousPokemonMove={this.props.getPreviousPokemonMove}
          movesIndex={this.props.movesIndex}
          moves={this.props.moves}
        />
        <SearchStyle>
          <input
            value={this.props.searchInputValue}
            onChange={this.props.handlePokemonSearch}
            placeholder={this.props.searchInputValue}
          />
          <button type="submit" onClick={this.props.handlePokemonSearchSubmit}>
            Search
          </button>
          <p>{this.props.errorMessage}</p>
        </SearchStyle>
      </RightPageStyle>
    );
  }
}

export default RightPage;
