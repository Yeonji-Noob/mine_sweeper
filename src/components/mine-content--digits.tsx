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
import digit_ from "../assets/digit-.png";



export const RenderDigits = (number) => {

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


  let numberStr;

  if (number < 0) {
    const _number = -number % 100;
    if (_number === 0) {
      numberStr = '00';
    } else if (_number < 10) {
      numberStr = '0' + _number;
    } else {
      numberStr = String(_number);
    }






    return (
      <>

        <img src={digit_} alt="-" />
        {numberStr.split('').map((n, i) => (
          <img src={digits[i]} key={i} alt={n} />
        ))}

      </>
    );


  }

}