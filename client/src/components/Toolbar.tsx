import React, { ChangeEvent } from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import "../styles/Toolbar.css";

const Toolbar = () => {
  const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
    toolState.setStrokeColor((e.target as HTMLInputElement).value);
  };

  return (
    <div className="Toolbar">
      <button
        onClick={(e) => {
          toolState.setTool(new Brush(canvasState.canvas));
          toolState.refreshColor();
        }}
      >
        brush
      </button>
      <button
        onClick={() => {
          toolState.setTool(new Line(canvasState.canvas));
          toolState.refreshColor();
        }}
      >
        line
      </button>
      <button onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}>
        eraser
      </button>
      <input type="color" onChange={(e) => changeColor(e)} />
      <button
        onClick={() => {
          canvasState.undo();
        }}
      >
        undo
      </button>
      <button
        onClick={() => {
          canvasState.redo();
        }}
      >
        redo
      </button>
    </div>
  );
};

export default Toolbar;
