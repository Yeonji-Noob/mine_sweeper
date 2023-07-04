import { useState } from "react";

import flag from '../assets/flag.png';
import question from '../assets/question.png';
import rectangle from "../assets/Rectangle.png";

import { MouseEvent } from "react";

// interface ClickCellProps {
//   value: number;
//   isMine: boolean;
// }

export interface MouseDown {
  isMouseDown: boolean;
}

export const ClickCell: React.FC = () => {

  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [isRightClick, setIsRightClick] = useState<number>(0);
  let imgName = [null, flag, question];

  const RightHandleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsRightClick((prevCount) => (prevCount + 1) % 3);
  }

  // 깃발, 물음표
  const getImageSrc = () => {
    if (isRightClick === 0 || isRightClick === 1 || isRightClick === 2) {
      return imgName[isRightClick];
    }
  };
  // console.log(isRightClick);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (e.button === 0) setIsMouseDown(true);
    else e.preventDefault();
  };

  return (
    <div className={`mine-cell_box ${isMouseDown ? 'active' : ''}`}
      onMouseDown={handleMouseDown}
      onContextMenu={RightHandleMouseDown}
    >
      <img src={getImageSrc()} className="cell-center" alt="flag" style={{ display: isRightClick < 1 ? 'none' : 'block' }} />
      <img src={rectangle} className="cell-rectangle" alt="cell" style={{ display: isMouseDown ? 'none' : 'block' }} />
    </div>
  );
}