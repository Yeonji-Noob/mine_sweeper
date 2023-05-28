import { useState } from "react";
import styled from "styled-components";
import { ClickCell } from "./";



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
  }

  .cell-flag {
    position: absolute;
    right: -2px;
    top: -2px;
  }

  }



`;


export const MineCells = () => {

  const numbers = [...Array(81)].map((_, index) => index + 1);

  const [isMouseDown, setIsMouseDown] = useState(false);


  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <CellsContainer>
      <div className="mine__content__inner"
      // onTouchEnd={onTouchEndCeils} onMouseUp={onMouseUpCeils} 
      >
        {/* <Cells
        // cells={cells} 
        // onMouseDown={onMouseDownCells} 
        // onMouseEnter={onMouseOverCells} 
        /> */}
        {numbers.map((key, index) => {
          return (
            <div className="mine__cell" key={key} id={`${index}`}>
              <ClickCell />
            </div>
          );
        })}


      </div>
    </CellsContainer>
  );
}