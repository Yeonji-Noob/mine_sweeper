import { useState, useEffect } from "react";
import styled from "styled-components";

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
// import digit_ from "../assets/digit-.png";


export const RenderDigits: React.FC = () => {

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

  const [digit, setDigit] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDigit((prevDigit) => {
        const nextDigit = prevDigit + 1;
        return nextDigit > 999 ? prevDigit : nextDigit;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const digit100 = Math.floor(digit / 100);
  const digit10 = Math.floor((digit % 100) / 10);
  const digit01 = digit % 10;


  const digit100Src = digits[digit100];
  const digit10Src = digits[digit10];
  const digit01Src = digits[digit01];

  return (
    <DigitsTime>
      <img src={digit100Src} alt="100" />
      <img src={digit10Src} alt="10" />
      <img src={digit01Src} alt="1" />
    </DigitsTime>

  );


}

const DigitsTime = styled.div`
position: absolute;
display: block;
inset: 0;
`;