import React from "react";

const ToolBar = () => {
  const btns = [
    "icon-brush",
    "icon-rect",
    "icon-circle",
    "icon-eraser",
    "icon-line",
  ];

  return (
    <div className="tool-bar">
      <div className="left-bar">
        {btns.map((btn, i) => (
          <button key={i} className="toolbar__btn">
            <svg width={25} height={25}>
              <use href={`/sprite.svg#${btn}`}></use>
            </svg>
          </button>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ToolBar;
