import LogicGame from "../interfaces/ILogicGame";
import NormalScuare from "../logic/NormalScuare";

class SecondContext implements LogicGame {
  scuare: NormalScuare;
  scuare2: NormalScuare;
  constructor() {
    this.scuare = new NormalScuare(0, 0, 20, 20, "blue");
    this.scuare2 = new NormalScuare(0, 200, 20, 20, "blue");
    this.scuare.velocity = 5;
    this.scuare2.velocity = 5;
  }

  logicContext() {
    if (this.scuare.x > 100) {
      this.scuare.y += this.scuare.velocity;
    }
    if (this.scuare.x < 0) {
      this.scuare.y += this.scuare.velocity;
    }
  }

  update(): void {
    this.scuare.update();
    this.scuare2.update();
    this.logicContext();
  }
  draw(ctx: CanvasRenderingContext2D): void {
    this.scuare.draw(ctx);
    this.scuare2.draw(ctx);
  }
}
export default SecondContext;
