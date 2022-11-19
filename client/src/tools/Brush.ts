import Tool from "./Tool";

export default class Brush extends Tool {
  //   constructor() {
  //     //функция супер вызывает конструктур родительского класса
  //     super();
  //   }
  /**
   * добавляем функции события на наш канвас, 3 слушателя,
   * каждому слушалтелю присваиваем созданные функции которые биндим к текущему контексту
   */
  listen() {
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseUpHandler(e: any) {}
  mouseDownHandler(e: any) {}
  mouseMoveHandler(e: any) {}
}
