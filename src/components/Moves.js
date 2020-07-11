import React from "react";
import styled from "styled-components";

const MovesStyle = styled.div`
  background-color: pink;
  display: flex;
`;

const MoveName = styled.p`
  width: 200px;
`;

const MoveLevel = styled.p`
  width: 150px;
`;

const MyButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

class Moves extends React.Component {
  state = { movesIndex: 0 };

  // renderMove = () => {
  //   if (this.props.moves[this.state.movesIndex] !== undefined) {
  //     return this.props.moves[this.state.movesIndex].move.name;
  //   }
  // };

  // getNextPokemonMove = () => {
  //   if (this.state.movesIndex !== this.props.moves.length - 1) {
  //     this.setState((prevState) => {
  //       return { movesIndex: prevState.movesIndex + 1 };
  //     });
  //   }
  // };

  // getPreviousPokemonMove = () => {
  //   if (this.state.movesIndex !== 0) {
  //     this.setState((prevState) => {
  //       return { movesIndex: prevState.movesIndex - 1 };
  //     });
  //   }
  // };

  render() {
    return (
      <div>
        <MovesStyle>
          <MoveName> {this.props.renderMove()}</MoveName>
          <MoveLevel>
            Learned at Level:{" "}
            {this.props.moves[this.props.movesIndex]
              ? this.props.moves[this.state.movesIndex].version_group_details[0]
                  .level_learned_at
              : ""}
          </MoveLevel>

          <MyButtons>
            <button onClick={this.props.getPreviousPokemonMove}>↑</button>
            <button onClick={this.props.getNextPokemonMove}>↓</button>
          </MyButtons>
        </MovesStyle>
      </div>
    );
  }
}

export default Moves;
