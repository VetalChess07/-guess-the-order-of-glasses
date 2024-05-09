import React from 'react';
import style from "./style.module.scss";

import Cup from '../../ui/cup/Cup';

const { inner, cup } = style;

const CupsContainer = ({onClickCupReplace, cups, curentCup ,dragStartHandler, dragLeaveHandler, dragEndHandler, dragOverHandler, dragDropHandler }) => {

  return (
    <div className={inner}>
      {cups.map(cup =>
        <Cup 
        className={curentCup !== null && curentCup.color == cup.color ? "active" : '' }
        onClickCupReplace={onClickCupReplace}
        cup={cup}
        key={cup.color}
        dragStartHandler={dragStartHandler}
        dragLeaveHandler={dragLeaveHandler}
        dragEndHandler={dragEndHandler}
        dragOverHandler={dragOverHandler}
        dragDropHandler={dragDropHandler}
        />
      )}
    </div>
  );
}

export default CupsContainer;