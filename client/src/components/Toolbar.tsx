import React from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Line from "../tools/Line";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
      >
        brush
      </button>
      <button
        className="toolbar__btn line"
        onClick={() => toolState.setTool(new Line(canvasState.canvas))}
      >
        line
      </button>
      <button className="toolbar__btn eraser">eraser</button>
      <input type="color" />
      <button className="toolbar__btn undo">undo</button>
      <button className="toolbar__btn redo">redo</button>
    </div>
  );
};

export default Toolbar;
