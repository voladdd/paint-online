import React, { useEffect, useRef, useState } from "react";
import "../styles/Canvas.css";
import { observer } from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

interface CanvasProps {
  onDraw: (value: string) => void;
  draw: string;
}

const Canvas = observer(({ onDraw, draw }: CanvasProps) => {
  /**
   * при запуске приложения сохраняем ссылку на канвас
   * кстати через референсы контролирует с неконтр элементами
   */
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // const [canvasData, setCanvasData] = useState("");

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  const mouseDownHandler = () => {
    const data = canvasRef.current?.toDataURL();
    if (data) {
      // onDraw(data);
      // console.log(data);
      canvasState.pushToUndo(data);
    }
  };

  const mouseUpHandler = () => {
    const data = canvasRef.current?.toDataURL();
    if (data) {
      onDraw(data);
      // canvasState.updates(draw);
    }
  };

  return (
    <div className="Canvas">
      <canvas
        onMouseDown={() => mouseDownHandler()}
        onMouseUp={() => mouseUpHandler()}
        ref={canvasRef}
        width={400}
        height={400}
      ></canvas>
    </div>
  );
});

export default Canvas;
