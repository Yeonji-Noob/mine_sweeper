// import styled from "styled-components";
import { MenuContainer } from "./mine-menu--game";
import { ExtractedDropdownHelp } from "./mine-type";

export const MineMenuHelp = ({ dropdownHelp, dropdownOpen }: ExtractedDropdownHelp) => {
  return (
    <MenuContainer>
      {/* help 부분 메뉴 */}
      <div onClick={dropdownOpen}

        className="mine-drop_down" >

        <div className="mine-drop_down__title" > Help </div>
        <div className="mine-drop_down__menu"
          style={{ visibility: dropdownHelp ? 'visible' : 'hidden' }}
        >

          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" />
            <div className="mine-drop_down__text" > Contents </div>
            <span className="mine-drop_down__hot-key" > F1 </span>
            <div className="mine-drop_down__arrow" />
          </div>

          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" />
            <div className="mine-drop_down__text" > Search for Help on... </div>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>

          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" />
            <div className="mine-drop_down__text" > Using Help </div>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>

          {/* -------------------------------------- */}
          <div className="mine-drop_down__separator" />


          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" />
            <div className="mine-drop_down__text" > About Minesweeper... </div>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>


          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" />
            <a className="mine-drop_down__text"
              href="https://github.com/Yeonji-Noob/mine_sweeper" >
              Github </a>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>


        </div>
      </div>
    </MenuContainer>
  );
}