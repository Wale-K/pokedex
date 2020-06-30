import React from "react";
import styled from "styled-components";
import Moves from "./Moves";
import EvolutionChain from "./EvolutionChain";

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

const RightPage = (props) => {
  return (
    <RightPageStyle>
      <BasicInfo>
        <BaseInformation>
          {props.stats.map((baseStat) => {
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
          {props.types.map((type) => {
            return <p>{type.type.name}</p>;
          })}
        </Types>
      </BasicInfo>
      <EvolutionChain />
      <Moves move={props.move} />
    </RightPageStyle>
  );
};

export default RightPage;
