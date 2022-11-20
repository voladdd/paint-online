import Brush from "./Brush";

export default class Eraser extends Brush {
  mouseDown: boolean | undefined;
  constructor(canvas: HTMLCanvasElement | null) {
    if (canvas) {
      //функция супер вызывает конструктур родительского класса
      super(canvas);
      /**После создания наш канвас будет слушать все эти функции */
    }
  }

  draw(x: number, y: number) {
    if (this.ctx) {
      this.ctx.strokeStyle = "white";
    }
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
  }
}
