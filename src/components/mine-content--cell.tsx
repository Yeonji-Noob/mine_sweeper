// import { useState, useEffect } from "react";
import styled from "styled-components";
import { ClickCell } from "./";
import mine from "../assets/mine-ceil.png";
import open1 from "../assets/open1.png";
import open2 from "../assets/open2.png";
import open3 from "../assets/open3.png";
import open4 from "../assets/open4.png";
import open5 from "../assets/open5.png";
import open6 from "../assets/open6.png";
import open7 from "../assets/open7.png";
import open8 from "../assets/open8.png";


export const MineCells: React.FC = () => {


  const row = 9; // 보드의 행 크기
  const column = 9; // 보드의 열 크기
  const totalMines = 10; //지뢰의 총 갯수

  // 2차원 숫자 배열 생성
  const gameBoard: number[][] = Array.from({ length: row }, () =>
    Array.from({ length: column }, () => 0)
  );

  // 랜덤한 위치에 1(지뢰) 추가
  let minesPlaced = 0;
  while (minesPlaced < totalMines) {
    const randomRow = Math.floor(Math.random() * row);
    const randomColumn = Math.floor(Math.random() * column);
    if (gameBoard[randomRow][randomColumn] !== 1) {
      gameBoard[randomRow][randomColumn] = 1;
      minesPlaced++;
    }
  }
  // const numbers: number[] = Array.from({ length: row * column }, (_, index) => index + 1);


  // 주변에 2 추가
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (gameBoard[r][c] === 1) {
        for (let i = r - 1; i <= r + 1; i++) {
          for (let j = c - 1; j <= c + 1; j++) {
            if (i >= 0 && i < row && j >= 0 && j < column && gameBoard[i][j] !== 1) {
              if (gameBoard[i][j] >= 2 && gameBoard[i][j] < 10) {
                gameBoard[i][j]++;
              } else if (gameBoard[i][j] === 10) {
                gameBoard[i][j] = 11;
              } else {
                gameBoard[i][j] = 2;
              }
            }
          }
        }
      }
    }
  }

  const handleImgClick = (event: React.MouseEvent<HTMLImageElement>) => {
    // 클릭한 부분 보이기
    const target = event.target as HTMLImageElement;
    target.style.display = 'block';
  };

  console.log(gameBoard);

  return (
    <CellsContainer>
      <div className="mine__content__inner" onClick={handleImgClick}>

        {gameBoard.map((row, rowIndex) =>
          row.map((cell, columnIndex) => (
            <div
              className="mine__cell"
              key={columnIndex + rowIndex * column}
              id={`${columnIndex + rowIndex * column}`}
            >
              <ClickCell />
              {cell === 1 ? <img src={mine} className="cell-img" alt="mine" /> : ''}
              {cell === 2 ? <img src={open1} className="cell-img" alt="mine" /> : ''}
              {cell === 3 ? <img src={open2} className="cell-img" alt="mine" /> : ''}
              {cell === 4 ? <img src={open3} className="cell-img" alt="mine" /> : ''}
              {cell === 5 ? <img src={open4} className="cell-img" alt="mine" /> : ''}
              {cell === 6 ? <img src={open5} className="cell-img" alt="mine" /> : ''}

            </div>
          ))
        )}
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
    z-index: 98;
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

  .cell-img {
      position: absolute;
      display: block;
      right: 0px;
      top: 0px;
      z-index: 1;
    }

  .cell-center {
    position: absolute;
    right: -2px;
    top: -2px;
  }

  }



`;
