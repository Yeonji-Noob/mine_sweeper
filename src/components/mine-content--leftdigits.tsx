import { useState, useEffect } from "react";

import digit0 from "../assets/digit0.png";
import digit1 from "../assets/digit1.png";
import digit2 from "../assets/digit2.png";
import digit3 from "../assets/digit3.png";
import digit4 from "../assets/digit4.png";
import digit5 from "../assets/digit5.png";
import digit6 from "../assets/digit6.png";
import digit7 from "../assets/digit7.png";
import digit8 from "../assets/digit8.png";
import digit9 from "../assets/digit9.png";

export const LeftDigits = () => {

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

  return (
    <>

      <img src={digit0} alt="100" />
      <img src={digit1} alt="10" />
      <img src={digit0} alt="1" />

    </>
  );
}