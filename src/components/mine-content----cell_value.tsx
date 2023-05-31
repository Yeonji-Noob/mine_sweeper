import { useState } from "react";
import mineDeath from "../assets/mine-death.png";
import misFlagged from "../assets/misflagged.png";
import mine from "../assets/mine-ceil.png";
import open1 from "../assets/open1.png";
import open2 from "../assets/open2.png";
import open3 from "../assets/open3.png";
import open4 from "../assets/open4.png";
import open5 from "../assets/open5.png";
import open6 from "../assets/open6.png";
import open7 from "../assets/open7.png";
import open8 from "../assets/open8.png";
import empty from "../assets/empty.png";



export const CellValue = ({ isMouseDown }: { isMouseDown: boolean }) => {

  // const [isValue, setValue] = useState<boolean>(false);




  return (
    <>
      <img src={open1} alt="value" style={{ display: isMouseDown ? 'block' : 'none' }} className="cell-push-center" />
    </>
  );
} 