import { useRef, useState } from "react";
import styled from "styled-components";
import { MineMenuGame, MineMenuHelp } from "./";

const MineDropDownContainerDiv = styled.div`
  
  position: absolute;
  display: flex;
  height: 20px;
  width: 163px;
  background-color: rgb(236, 233, 216);


`;


export const MineMenu = () => {

  const [dropdownGame, setDropdownGame] = useState<boolean>(false);
  const [dropdownHelp, setDropdownHelp] = useState<boolean>(false);

  const dropDown = useRef(null);



  const dropdownOpenGame = () => {
    setDropdownGame(!dropdownGame);
  }

  const dropdownOpenHelp = () => {
    setDropdownHelp(!dropdownHelp);
  }


  return (
    <>

      {/*  game과 help의 dropdown menu */}
      <MineDropDownContainerDiv
        ref={dropDown}
      >
        <MineMenuGame dropdownGame={dropdownGame} dropdownOpen={dropdownOpenGame}></MineMenuGame>

        <MineMenuHelp dropdownHelp={dropdownHelp} dropdownOpen={dropdownOpenHelp}></MineMenuHelp>

      </MineDropDownContainerDiv>

    </>
  );
}