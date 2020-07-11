import React from "react";
import styled from "styled-components";

const Blue = styled.div`
  background-color: #27abfd;
  width: 65px;
  height: 65px;
  border-radius: 50px;
  margin-right: 10px;
`;

const Red = styled.div`
  background-color: #cc0a2c;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  margin-right: 10px;
`;

const Yellow = styled.div`
  background-color: yellow;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  margin-right: 10px;
`;

const Green = styled.div`
  background-color: green;
  width: 20px;
  height: 20px;
  border-radius: 50px;
`;

const CameraStyle = styled.div`
  // background-color: pink;
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 65px;
  border-radius: 10px 0 0 0;
  margin-bottom: 5px;
`;

const Camera = (props) => {
  return (
    <CameraStyle>
      <Blue />
      <Red />
      <Yellow />
      <Green />
      <button onClick={props.setGameVersion}>Red/Blue</button>
      <button onClick={props.setGameVersion}>Yellow</button>
    </CameraStyle>
  );
};

export default Camera;
