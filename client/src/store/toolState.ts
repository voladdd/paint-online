import { makeAutoObservable } from "mobx";
import Tool from "../tools/Tool";

class ToolState {
  tool: Tool | null = null;
  color: string | CanvasGradient | CanvasPattern = "black";
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: any) {
    this.tool = tool;
  }

  refreshColor() {
    if (this.tool) {
      this.tool.strokeColor = this.color;
    }
  }

  setStrokeColor(color: string | CanvasGradient | CanvasPattern) {
    if (this.tool) {
      this.tool.strokeColor = color;
      this.color = color;
    }
  }
  setLineWidth(width: number) {
    if (this.tool) {
      this.tool.lineWidth = width;
    }
  }
}

export default new ToolState();
