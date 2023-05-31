import { useState, useEffect } from "react";
import styled from "styled-components";
import { ClickCell } from "./";


// interface Cell {
//   value: number;
//   isMine: boolean;
// }



export const MineCells: React.FC = () => {


  const boardSize = 9; // 보드 크기

  //숫자 배열 9*9 생성하기
  const numbers: number[] = Array.from({ length: boardSize * boardSize }, (_, index) => index + 1);


  return (
    <CellsContainer>
      <div className="mine__content__inner">
        {numbers.map(index => (
          <div className="mine__cell" key={index} id={`${index}`}>
            <ClickCell />
          </div>
        ))}
      </div>
    </CellsContainer>
  );
}



// styled-components
const CellsContainer = styled.div`

  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(9, 16px);
    grid-template-rows: repeat(9, 16px);
    border-width: 3px;
    border-style: solid;
    border-color: rgb(128, 128, 128) rgb(245, 245, 245) rgb(245, 245, 245) rgb(128, 128, 128);
  }


  .mine__cell {
  position: relative;
  width: 16px;
  height: 16px;

  & .mine-cell_box {
    position: absolute;
    width: 12px;
    height: 12px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(245, 245, 245) rgb(128, 128, 128) rgb(128, 128, 128) rgb(245, 245, 245);
    
  }

  & .active {
    border: 1px solid rgb(128, 128, 128);
    border-left: 0px;
    width: 15px;
    height: 15px;

    .cell-push-center {
    position: absolute;
    right: 0px;
    top: 0px;
  }
  }

  .cell-center {
    position: absolute;
    right: -2px;
    top: -2px;
  }

  }



`;
