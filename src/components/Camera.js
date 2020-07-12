import React from "react";
import styled from "styled-components";

const CameraStyle = styled.div`
  // background-color: pink;
  display: flex;

  width: 400px;
  height: 65px;
  border-radius: 10px 0 0 0;
  margin-bottom: 5px;
  margin-top: 5px;
  button {
    width: 54px;
  }
  justify-content: space-around;
`;

const gameIndices = [
  { render: "R/B/Y", argument: "red", generation: 1 },
  { render: "G/S/C", argument: "gold", generation: 2 },
  { render: "R/S/E", argument: "ruby", generation: 3 },
  { render: "D/P/PT", argument: "diamond", generation: 4 },
  { render: "B/W", argument: "black", generation: 5 },
  { render: "X/Y", argument: "omega-ruby-alpha-sapphire", generation: 6 },
  { render: "S/M", argument: "sun-moon", generation: 7 },
];

// gameIndices needs to be changes because gen 5+ pokemon don't have data in a game_indices array on the API.

const Camera = (props) => {
  return (
    <CameraStyle>
      {gameIndices.map((elem) => {
        return (
          <button
            key={elem.argument}
            onClick={() => props.setGameVersion(elem.argument)}
          >
            {elem.render}
          </button>
        );
      })}
    </CameraStyle>
  );
};

export default Camera;
