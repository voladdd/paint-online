export default class Tool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  constructor(canvas: HTMLCanvasElement) {
    //сохраняем ссылку на канвас внутри класса
    this.canvas = canvas;
    //ссылка на контекст позволяюзщая производить различные манипуляции на канвасе
    this.ctx = canvas.getContext("2d");
  }
}
