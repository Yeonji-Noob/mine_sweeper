import styled from "styled-components";


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

  }



`;


export const MineCells = (
  // { cells, onMouseDownCells, onMouseOverCells }
) => {

  const numbers = [...Array(81)].map((_, index) => index + 1);

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
              <div className="mine-cell_box"></div>
            </div>
          );
        })}


      </div>
    </CellsContainer>
  );
}