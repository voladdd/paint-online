export default class Tool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  constructor(canvas: HTMLCanvasElement) {
    //сохраняем ссылку на канвас внутри класса
    this.canvas = canvas;
    //ссылка на контекст позволяюзщая производить различные манипуляции на канвасе
    this.ctx = canvas.getContext("2d");
    this.destroyEvents();
  }
  set strokeColor(color: string | CanvasGradient | CanvasPattern) {
    if (this.ctx) {
      this.ctx.strokeStyle = color;
    }
  }
  set lineWidth(width: number) {
    if (this.ctx) {
      this.ctx.lineWidth = width;
    }
  }

  destroyEvents() {
    this.canvas.onmouseup = null;
    this.canvas.onmousedown = null;
    this.canvas.onmousemove = null;
  }
}
