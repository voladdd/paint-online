import { makeAutoObservable } from "mobx";
import Tool from "../tools/Tool";

class ToolState {
  tool: Tool | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: any) {
    this.tool = tool;
  }

  setFillColor(color: string | CanvasGradient | CanvasPattern) {
    if (this.tool) {
      this.tool.fillColor = color;
    }
  }
  setStrokeColor(color: string | CanvasGradient | CanvasPattern) {
    if (this.tool) {
      this.tool.strokeColor = color;
    }
  }
  setLineWidth(width: number) {
    if (this.tool) {
      this.tool.lineWidth = width;
    }
  }
}

export default new ToolState();
