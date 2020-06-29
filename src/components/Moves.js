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

`

const Moves = (props) => {
  return (
    <div>
      {props.move}
      <MovesStyle>
        <PageDivider>
          <div>
            <p>Accuracy</p>
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
        </PageDivider>
        <MyButtons>
        <button>↑</button>
        <button>↓</button>
        </MyButtons>
      </MovesStyle>
    </div>

    // <MovesStyle>
    //   <p>{props.move}</p>
    //   <div>
    //     <div>
    //       <p>Accuracy</p>
    //       <p>100</p>
    //     </div>
    //     <div>
    //       <p>Power</p>
    //       <p>80</p>
    //     </div>
    //     <div>
    //       <p>PP</p>
    //       <p>10</p>
    //     </div>
    //   </div>

    //   <div>
    //     <p>Type: Grass</p>
    //     <p>Learn: Lv 0</p>
    //   </div>
    // </MovesStyle>
  );
};

export default Moves;
