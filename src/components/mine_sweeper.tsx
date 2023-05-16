import { useState } from 'react';
import styled from 'styled-components';
import { MineContents, MineMenu } from './';
import { OpenBehavior, OpenBehaviorExtend } from './mine-type';

// import dead from '../assets/dead.png';
// import win from '../assets/win.png';
// import ohh from '../assets/ohh.png';
// import empty from '../assets/empty.png';
// import open1 from '../assets/open1.png';
// import open2 from '../assets/open2.png';
// import open3 from '../assets/open3.png';
// import open4 from '../assets/open4.png';
// import open5 from '../assets/open5.png';
// import open6 from '../assets/open6.png';
// import open7 from '../assets/open7.png';
// import open8 from '../assets/open8.png';
// import flag from '../assets/flag.png';
// import mine from '../assets/mine-ceil.png';
// import mineDeath from '../assets/mine-death.png';
// import misFlagged from '../assets/misflagged.png';
// import question from '../assets/question.png';
import digit0 from '../assets/digit0.png';
import digit1 from '../assets/digit1.png';
import digit2 from '../assets/digit2.png';
import digit3 from '../assets/digit3.png';
import digit4 from '../assets/digit4.png';
import digit5 from '../assets/digit5.png';
import digit6 from '../assets/digit6.png';
import digit7 from '../assets/digit7.png';
import digit8 from '../assets/digit8.png';
import digit9 from '../assets/digit9.png';
import digit_ from '../assets/digit-.png';

const digits = [
  digit0,
  digit1,
  digit2,
  digit3,
  digit4,
  digit5,
  digit6,
  digit7,
  digit8,
  digit9,
];

const MineSweeperContainer = styled.div`
  
  display: inline-block;
  img { pointer-events: none;}

`;


export const MineSweeper = () => {

  const [openBehavior, setOpenBehavior] = useState<OpenBehavior>({ index: -1, behavior: '' });

  return (
    // 전체를 감싸는 div
    <MineSweeperContainer
    // className={className} 
    // onContextMenu={e => e.preventDefault()} 
    >

      {/* dropdown 메뉴 */}
      <MineMenu></MineMenu>


      {/* 지뢰찾기 내부 */}
      <MineContents></MineContents>


    </MineSweeperContainer >
  );
}


// const CeilBackgroundCover = styled.div`
//   position: absolute;
//   width: 16px;
//   height: 16px;
//   border-left: rgb(245, 245, 245) solid 2px;
//   border-top: rgb(245, 245, 245) solid 2px;
//   border-right: rgb(128, 128, 128) solid 2px;
//   border-bottom: rgb(128, 128, 128) solid 2px;
// `;
// const CeilBackgroundOpen = styled.div`
//   position: absolute;
//   width: 16px;
//   height: 16px;
//   border-left: rgb(128, 128, 128) solid 1px;
//   border-top: rgb(128, 128, 128) solid 1px;
// `;

//   .mine__drop-down__arrow {
//   }
//   .mine__drop-down__hot-key {
//     padding-left: 5px;
//   }
//   .mine__drop-down__text {
//     white-space: nowrap;
//   }




//   .mine__top-bar {
//     position: relative;
//     display: flex;
//     height: 20px;
//     background-color: rgb(236, 233, 216);
//   }
//   .mine__top-bar__text {
//     padding: 0 5px;
//     height: 100%;
//     line-height: 20px;
//     font-size: 11px;
//     &:hover {
//       color: ${({ platform }) => (platform === 'desktop' ? '#FFF' : '#000')};
//       background-color: ${({ platform }) =>
//     platform === 'desktop' ? '#0b61ff' : 'transparent'};
//     }
//   }


//   .mine__content {
//     border-left: rgb(245, 245, 245) solid 3px;
//     border-top: rgb(245, 245, 245) solid 3px;
//     background-color: rgb(192, 192, 192);
//     padding: 5px;
//   }
//   .mine__score-bar {
//     height: 34px;
//     border-radius: 1px;
//     border-top: rgb(128, 128, 128) solid 2px;
//     border-left: rgb(128, 128, 128) solid 2px;
//     border-right: rgb(245, 245, 245) solid 2px;
//     border-bottom: rgb(245, 245, 245) solid 2px;
//     margin-bottom: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 3px 7px 3px 4px;
//   }
//   .mine__digits__outer {
//     width: 40px;
//     height: 24px;
//     border-width: 0 1px 1px 0;
//     border-style: solid;
//     border-color: #fff;
//     text-align: right;
//   }
//   .mine__face__outer {
//     width: 24px;
//     height: 24px;
//     border-top: 1px solid rgb(128, 128, 128);
//     border-left: 1px solid rgb(128, 128, 128);
//     border-radius: 2px;
//     transform: translateX(1px);
//   }
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
//   .mine__content__inner {
//     display: grid;
//     grid-template-columns: repeat(${({ columns }) => columns}, 16px);
//     grid-template-rows: repeat(${({ rows }) => rows}, 16px);
//     border-top: rgb(128, 128, 128) solid 3px;
//     border-left: rgb(128, 128, 128) solid 3px;
//     border-right: rgb(245, 245, 245) solid 3px;
//     border-bottom: rgb(245, 245, 245) solid 3px;
//   }
//   .mine__ceil {
//     position: relative;
//     img {
//       position: absolute;
//       width: 16px;
//       height: 16px;
//     }
//   }
// `;