import IContexto from "./interfaces/IContexto.js";
import IControllerContext from "./interfaces/IControllerContext.js";

class ControllerContext implements IControllerContext {
  elements: Array<IContexto> = [];
  addContexts(element: Array<IContexto>): void {
    this.elements = element;
  }
  update(): void {
    this.elements.forEach((element) => {
      element.update();
    });
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.elements.forEach((element) => {
      element.draw(ctx);
    });
  }
}
export default ControllerContext;
