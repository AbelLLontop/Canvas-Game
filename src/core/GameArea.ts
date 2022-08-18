import IControllerContext from "./interfaces/IControllerContext";

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
  start(controllerContext: IControllerContext) {
    this.runAnimationInterval(100, controllerContext);
    // this.runAnimationFrame(logicGame);
  }
  runAnimationFrame(controllerContext: IControllerContext) {
    const run = () => {
      controllerContext.update();
      this.context.fillStyle = "rgba(0, 0, 0, 0.1)";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      controllerContext.draw(this.context);
      requestAnimationFrame(run);
    };
    this.interval = requestAnimationFrame(run);
  }
  runAnimationInterval(
    interval: number,
    controllerContext: IControllerContext
  ) {
    this.interval = setInterval(() => {
      controllerContext.update();
      this.context.fillStyle = "rgba(0, 0, 0, 0.1)";
      //  this.context.fillStyle = "rgba(0, 0, 0, 1)";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      controllerContext.draw(this.context);
    }, interval);
  }

  clearTransparent() {}
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default GameArea;
