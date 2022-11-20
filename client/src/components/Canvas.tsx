import React, { useEffect, useRef } from "react";
import "../styles/canvas.css";
import { observer } from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

const Canvas = observer(() => {
  /**
   * при запуске приложения сохраняем ссылку на канвас
   * кстати через референсы контролирует с неконтр элементами
   */
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={400} height={400}></canvas>
    </div>
  );
});

export default Canvas;
