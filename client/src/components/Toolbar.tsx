import React from "react";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button className="toolbar__btn brush">brush</button>
      <button className="toolbar__btn line">line</button>
      <button className="toolbar__btn eraser">eraser</button>
      <input type="color" />
      <button className="toolbar__btn undo">undo</button>
      <button className="toolbar__btn redo">redo</button>
    </div>
  );
};

export default Toolbar;
