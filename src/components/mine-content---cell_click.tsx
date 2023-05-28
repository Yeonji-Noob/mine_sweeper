import { useState } from "react";

export const ClickCell: React.FC = () => {

  const [isMouseDown, setIsMouseDown] = useState(false);


  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  // const handleMouseUp = () => {
  //   setIsMouseDown(false);
  // };

  return (
    <div className={`mine-cell_box ${isMouseDown ? 'active' : ''}`}
      onMouseDown={handleMouseDown}
    >
    </div>
  );
}