import LogicGame from "./interfaces/ILogicGame";

class GameArea {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  interval: number;
  constructor() {
    this.canvas = document.createElement("canvas") as HTMLCanvasElement;
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
  start(logicGame: LogicGame) {
    this.runAnimationInterval(100, logicGame);
    // this.runAnimationFrame(logicGame);
  }
  runAnimationFrame(logicGame: LogicGame) {
    const run = () => {
      logicGame.update();
      this.context.fillStyle = "rgba(0, 0, 0, 0.1)";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      logicGame.draw(this.context);
      requestAnimationFrame(run);
    };
    this.interval = requestAnimationFrame(run);
  }
  runAnimationInterval(interval: number, logicGame: LogicGame) {
    this.interval = setInterval(() => {
      logicGame.update();
      this.context.fillStyle = "rgba(0, 0, 0, 0.1)";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      logicGame.draw(this.context);
    }, interval);
  }

  clearTransparent() {}
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default GameArea;
