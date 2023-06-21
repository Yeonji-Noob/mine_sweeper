import styled from "styled-components";
import checked from "../assets/checked.png";

import { ExtractedDropdownGame } from "./mine-type";



export const MenuContainer = styled.div`

.mine-drop_down {
  position: relative;
  z-index: 99;
}

  /* title(game) 부분 */
.mine-drop_down__title {
  padding: 0 5px;
  height: 100%;
  line-height: 20px;
  font-size: 11px;
  background-color: #ECE9D8;
  &:hover {
    color: white;
    background-color: #1660e8;
  }

}

.mine-drop_down__menu {
  background-color: white;
  position: absolute;
  box-shadow: 2px 2px 1px rgb(100, 100, 100);
  border: 1px solid gray;
  padding: 2px;
  display: grid;
  grid-template-columns: 18px auto auto 15px;
  line-height: 18px;
  font-size: 11px;
}

.mine-drop_down__row {
  display: contents;
  &:hover > * {
  background: #e99f17;
  filter: invert(100%);
  }
}

.mine-drop_down__check {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mine-drop_down__text {
  white-space: nowrap;
}


.mine-drop_down__hot-key {
  padding-left: 5px;
}

.mine-drop_down__arrow {

}

.mine-drop_down__separator {
  grid-column: 1 / 5;
  height: 1px;
  background-color: gray;
  margin: 3px 1px;
}

`


export const MineMenuGame = ({ dropdownGame, dropdownOpen }: ExtractedDropdownGame) => {


  return (
    <MenuContainer>
      {/* game 부분 메뉴 */}
      <div onClick={dropdownOpen} className="mine-drop_down">
        <div className="mine-drop_down__title" > Game </div>

        <div className="mine-drop_down__menu"
          style={{ visibility: dropdownGame ? 'visible' : 'hidden' }}
        >

          <div className="mine-drop_down__row"
          // onMouseUp={() => onReset()} 
          >
            <div className="mine-drop_down__check" />
            <div className="mine-drop_down__text" > New </div>
            <span className="mine-drop_down__hot-key" > F2 </span>
            <div className="mine-drop_down__arrow" />
          </div>


          {/* -------------------------------------- */}
          <div className="mine-drop_down__separator" />



          <div className="mine-drop_down__row"
          // onMouseUp={() => onReset('Beginner')} 
          // onTouchStart={() => onReset('Beginner')} 
          >
            <div className="mine-drop_down__check" >
              <img src={checked} alt="checked" />
            </div>
            <span> Beginner </span>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>


          <div className="mine-drop_down__row"
          // onMouseUp={() => onReset('Intermediate')}
          // onTouchStart={() => onReset('Intermediate')}
          >
            <div className="mine-drop_down__check" >
            </div>
            <span style={{ color: '#919191' }}> Intermediate </span>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>


          <div className="mine-drop_down__row"
          // onMouseUp={() => onReset('Expert')}
          // onTouchStart={
          //   () => onReset('Expert')} 
          >
            <div className="mine-drop_down__check" >
              {/* {difficulty === 'Expert' && <img src={checked} alt="checked" />} */}
            </div>
            <span style={{ color: '#919191' }}> Expert </span>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>

          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" />
            <span style={{ color: '#919191' }}> Custom </span>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>


          {/* -------------------------------------- */}
          <div className="mine-drop_down__separator" />



          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" >
              <img src={checked} alt="checked" />
            </div>
            <span> Marks </span>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>


          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" >
              <img src={checked} alt="checked" />
            </div>
            <span> Color </span>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>


          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" />
            <span> Sound </span>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>


          {/* -------------------------------------- */}
          <div className="mine-drop_down__separator" />


          <div className="mine-drop_down__row" >
            <div className="mine-drop_down__check" />
            <span> Best Times... </span>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>

          {/* -------------------------------------- */}
          <div className="mine-drop_down__separator" />


          <div className="mine-drop_down__row"
          // onMouseUp={onClose}
          >
            <div className="mine-drop_down__check" />
            <span> Exit </span>
            <span className="mine-drop_down__hot-key" />
            <div className="mine-drop_down__arrow" />
          </div>

        </div>
      </div>
    </MenuContainer>
  );
}