import ILogicGame from "../core/interfaces/ILogicGame";
import Scuare from "../models/Scuare";

class NormalScuare extends Scuare implements ILogicGame {
  velocity: number = 20;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) {
    super(x, y, width, height, color);
  }
  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
  }
  update(): void {
    this.x += this.velocity;
    if (this.x > 500) {
      this.velocity = -this.velocity;
    }
    if (this.x < 0) {
      this.velocity = -this.velocity;
    }
  }
}
export default NormalScuare;
