import Tool from "./Tool";

export default class Brush extends Tool {
  mouseDown: boolean | undefined;
  constructor(canvas: HTMLCanvasElement | null) {
    if (canvas) {
      //функция супер вызывает конструктур родительского класса
      super(canvas);
      /**После создания наш канвас будет слушать все эти функции */
      this.listen();
    }
  }
  /**
   * добавляем функции события на наш канвас, 3 слушателя,
   * каждому слушалтелю присваиваем созданные функции которые биндим к текущему контексту
   */
  listen() {
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseUpHandler(e: MouseEvent) {
    this.mouseDown = false;
  }
  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    //начали рисовать новую линию
    this.ctx?.beginPath();
    this.ctx?.moveTo(
      e.pageX - (e.target as HTMLElement).offsetLeft,
      e.pageY - (e.target as HTMLElement).offsetTop
    );
  }
  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      this.draw(
        e.pageX - (e.target as HTMLElement).offsetLeft,
        e.pageY - (e.target as HTMLElement).offsetTop
      );
    }
  }

  draw(x: number, y: number) {
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
  }
}
