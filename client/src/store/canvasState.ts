import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas: HTMLCanvasElement | null = null;
  undoList: string[] = [];
  redoList: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas;
  }

  pushToUndo(data: string) {
    this.undoList.push(data);
  }
  pushToRedo(data: string) {
    this.redoList.push(data);
  }

  undo() {
    if (this.canvas) {
      let ctx = this.canvas.getContext("2d");
      if (this.undoList.length > 0 && ctx) {
        let dataUrl = this.undoList.pop();
        if (dataUrl !== undefined) {
          this.redoList.push(this.canvas.toDataURL());
          let img = new Image();
          img.src = dataUrl;
          img.onload = () => {
            if (this.canvas) {
              ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
              ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            }
          };
        }
      } else {
        ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  redo() {
    if (this.canvas) {
      let ctx = this.canvas.getContext("2d");
      if (this.redoList.length > 0 && ctx) {
        let dataUrl = this.redoList.pop();
        if (dataUrl !== undefined) {
          this.undoList.push(this.canvas.toDataURL());
          let img = new Image();
          img.src = dataUrl;
          img.onload = () => {
            if (this.canvas) {
              ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
              ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            }
          };
        }
      }
    }
  }
}

export default new CanvasState();
