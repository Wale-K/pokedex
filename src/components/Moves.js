import React from "react";
import styled from "styled-components";

const MovesStyle = styled.div`
  background-color: pink;
  display: flex;
`;

const PageDivider = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  width: 45%;
  div {
    display: flex;
    justify-content: space-between;
  }
  text-align: right;
`;

const MyButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

class Moves extends React.Component {
  state = { movesIndex: 0 };

  //   renderMove = () => {
  //     if (this.props.moves[this.state.movesIndex] !== undefined) {
  //       return this.props.moves[this.state.movesIndex].move.name;
  //     }
  //   };

  //   getNextPokemonMove = () => {
  //     if (this.state.movesIndex !== this.props.moves.length - 1) {
  //       this.setState((prevState) => {
  //         return { movesIndex: prevState.movesIndex + 1 };
  //       });
  //     }
  //   };

  //   getPreviousPokemonMove = () => {
  //     if (this.state.movesIndex !== 0) {
  //       this.setState((prevState) => {
  //         return { movesIndex: prevState.movesIndex - 1 };
  //       });
  //     }
  //   };

  render() {
    return (
      <div>
        <MovesStyle>
          {/* {this.renderMove()} */}
          <p>Learned at Level:&nbsp;</p>
          {/* <p>
            {this.props.moves[this.state.movesIndex]
              ? this.props.moves[this.state.movesIndex].version_group_details[0]
                  .level_learned_at
              : ""}
          </p> */}

          {/* <MovesStyle>
          <PageDivider>
            <div>
              
              <p>100</p>
            </div>
            <div>
              <p>Power</p>
              <p>80</p>
            </div>
            <div>
              <p>PP</p>
              <p>10</p>
            </div>
          </PageDivider>
          <PageDivider>
            <p>Type: Grass</p>
            <p>Learn: Lv 0</p>
          </PageDivider> */}
          <MyButtons>
            <button>↑</button>
            <button>↓</button>
          </MyButtons>
        </MovesStyle>
      </div>
    );
  }
}

export default Moves;
