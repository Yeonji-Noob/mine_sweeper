import styled from "styled-components";
import smile from "../assets/smile.png";
import flag from "../assets/flag.png";
import mine from "../assets/mine-ceil.png";
import question from "../assets/question.png";
import mineDeath from "../assets/mine-death.png";
import misFlagged from "../assets/misflagged.png";

import open1 from "../assets/open1.png";
import open2 from "../assets/open2.png";
import open3 from "../assets/open3.png";
import open4 from "../assets/open4.png";
import open5 from "../assets/open5.png";
import open6 from "../assets/open6.png";
import open7 from "../assets/open7.png";
import open8 from "../assets/open8.png";
import empty from "../assets/empty.png";

import { useState } from "react";
import { Cells } from "./";
import { OpenBehaviorExtend } from './mine-type';

const MineContentContainer = styled.div`

.mine__content {
  border-left: rgb(245, 245, 245) solid 3px;
  border-top: rgb(245, 245, 245) solid 3px;
  background-color: rgb(192, 192, 192);
  padding: 5px;
}
.mine__score-bar {
  height: 34px;
  border-radius: 1px;
  border-top: rgb(128, 128, 128) solid 2px;
  border-left: rgb(128, 128, 128) solid 2px;
  border-right: rgb(245, 245, 245) solid 2px;
  border-bottom: rgb(245, 245, 245) solid 2px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 7px 3px 4px;
}

.mine__digits__outer {
  width: 40px;
  height: 24px;
  border-width: 0 1px 1px 0;
  border-style: solid;
  border-color: #fff;
  text-align: right;
} 
.mine__face__outer {
  width: 24px;
  height: 24px;
  border-top: 1px solid rgb(128, 128, 128);
  border-left: 1px solid rgb(128, 128, 128);
  border-radius: 2px;
  transform: translateX(1px);
}

//   .mine__face {
//     border-radius: 2px;
//     height: 100%;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgb(192, 192, 192);
//     border-width: 2px;
//     border-style: solid;
//     border-color: rgb(245, 245, 245) rgb(128, 128, 128) rgb(128, 128, 128)
//       rgb(245, 245, 245);
//     outline: none;
//     &:active:hover {
//       border-width: 1px;
//       border-color: rgb(128, 128, 128);
//       img {
//         transform: translate(1px, 1px);
//       }
//       img:nth-child(1) {
//         display: none;
//       }
//       img:nth-child(2) {
//         display: block;
//       }
//     }
//     img:nth-child(2) {
//       display: none;
//     }
//   }
.mine__content__inner {
display: grid;

border-top: rgb(128, 128, 128) solid 3px;
border-left: rgb(128, 128, 128) solid 3px;
border-right: rgb(245, 245, 245) solid 3px;
border-bottom: rgb(245, 245, 245) solid 3px;
}
//   .mine__ceil {
//     position: relative;
//     img {
//       position: absolute;
//       width: 16px;
//       height: 16px;
//     }
//   }


`;

// .mine__content__inner 안에 넣어야 함
/* grid-template-columns: repeat(${({ columns }) => columns}, 16px);
grid-template-rows: repeat(${({ rows }) => rows}, 16px); */

const CeilBackgroundCover = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: rgb(245, 245, 245) solid 2px;
  border-top: rgb(245, 245, 245) solid 2px;
  border-right: rgb(128, 128, 128) solid 2px;
  border-bottom: rgb(128, 128, 128) solid 2px;
`;
const CeilBackgroundOpen = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: rgb(128, 128, 128) solid 1px;
  border-top: rgb(128, 128, 128) solid 1px;
`;


const Die = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="death" src={mineDeath} />
  </>
);
const MisFlagged = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="misFlagged" src={misFlagged} />
  </>
);

const Flag = () => (
  <>
    <CeilBackgroundCover />
    <img alt="flag" src={flag} />
  </>
);

// function getTextImg(index) {
//   return [empty, open1, open2, open3, open4, open5, open6, open7, open8][index];
// }

// const MinesAround = ({ mines }) => (
//   <>
//     <CeilBackgroundOpen />
//     <img alt="mines-around" src={getTextImg(mines)} />
//   </>
// );

// const Question = () => (
//   <>
//     <CeilBackgroundCover />
//     <img alt="question" src={question} />
//   </>
// );

// const QuestionOpen = () => (
//   <>
//     <CeilBackgroundOpen />
//     <img alt="question" src={question} />
//   </>
// );

// const Mine = () => (
//   <>
//     <CeilBackgroundOpen />
//     <img alt="mine" src={mine} />
//   </>
// );



export const MineContents = () => {




  // function Cells({ cells, onMouseDown, onMouseEnter }) {
  //   function renderContent(cell) {
  //     const { state, minesAround, opening } = cell;
  //     switch (state) {
  //       case 'open':
  //         return <MinesAround mines={minesAround} />;
  //       case 'flag':
  //         return <Flag />;
  //       case 'misflagged':
  //         return <MisFlagged />;
  //       case 'mine':
  //         return <Mine />;
  //       case 'die':
  //         return <Die />;
  //       case 'unknown':
  //         return opening ? <QuestionOpen /> : <Question />;
  //       default:
  //         return opening ? <CeilBackgroundOpen /> : <CeilBackgroundCover />;
  //     }
  //   }



  //   function onMouseDownCells(e, index) {
  //     if (e.button === 2 && e.buttons === 2 && index !== -1) {
  //       changeCeilState(index);
  //     } else if (e.button === 0 && e.buttons === 1) {
  //       setOpenBehavior({
  //         index,
  //         behavior: 'single',
  //       });
  //     } else if (e.buttons === 3) {
  //       setOpenBehavior({
  //         index,
  //         behavior: 'multi',
  //       });
  //     }
  //   }


  // function onMouseOverCells(index: number) {
  //   setOpenBehavior({
  //     index,
  //     behavior: openBehavior.behavior,
  //   });
  // }



  return (

    <MineContentContainer>
      {/* 지뢰찾기 내부 */}
      <div className="mine__content"
      // onMouseDown={
      //   onMouseDownContent
      // } 
      >

        <div className="mine__score-bar">
          <div className="mine__digits__outer" >
            {/* {renderDigits(remainMines())}  */}
          </div>



          <div className="mine__face__outer" >

            <button
              // ref={face} 
              className="mine__face"
            // onClick={() => onReset()} 
            >
              {/* {statusFace()} */}
              <img alt="smile" src={smile} />
            </button>

          </div>

          <div className="mine__digits__outer" >
            {/* {renderDigits(seconds)} */}
          </div>
        </div>

        <div className="mine__content__inner"
        // onTouchEnd={onTouchEndCeils} onMouseUp={onMouseUpCeils} 
        >
          <Cells
          // cells={cells} 
          // onMouseDown={onMouseDownCells} 
          // onMouseEnter={onMouseOverCells} 
          />

        </div>

      </div>
    </MineContentContainer>

  );
}