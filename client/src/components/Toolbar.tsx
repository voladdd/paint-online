import React, { ChangeEvent } from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";

const Toolbar = () => {
  const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
    toolState.setStrokeColor((e.target as HTMLInputElement).value);
  };

  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={(e) => {
          toolState.setTool(new Brush(canvasState.canvas));
          toolState.refreshColor();
        }}
      >
        brush
      </button>
      <button
        className="toolbar__btn line"
        onClick={() => {
          toolState.setTool(new Line(canvasState.canvas));
          toolState.refreshColor();
        }}
      >
        line
      </button>
      <button
        className="toolbar__btn eraser"
        onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
      >
        eraser
      </button>
      <input type="color" onChange={(e) => changeColor(e)} />
      <button className="toolbar__btn undo">undo</button>
      <button className="toolbar__btn redo">redo</button>
    </div>
  );
};

export default Toolbar;
