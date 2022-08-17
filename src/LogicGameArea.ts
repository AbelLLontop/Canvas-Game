import ILogicGame from "./interfaces/ILogicGame.js";

class LogicGameArea implements ILogicGame {
  elements: Array<ILogicGame> = [];
  addElements(element: Array<ILogicGame>): void {
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
export default LogicGameArea;
