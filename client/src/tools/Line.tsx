import Tool from "./Tool";

export default class Line extends Tool {
  mouseDown: boolean | undefined;
  currentX: number | undefined;
  currentY: number | undefined;
  saved: string | undefined;
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
    this.currentX = e.pageX - (e.target as HTMLElement).offsetLeft;
    this.currentY = e.pageY - (e.target as HTMLElement).offsetTop;
    this.ctx?.beginPath();
    this.ctx?.moveTo(this.currentX, this.currentY);
    this.saved = this.canvas.toDataURL();
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
    const img = new Image();
    if (this.saved) {
      img.src = this.saved;
    }
    img.onload = async () => {
      if (this.ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        if (this.currentX && this.currentY) {
          this.ctx.moveTo(this.currentX, this.currentY);
        }
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
      }
    };
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
  }
}
