import IContexto from "../core/interfaces/IContexto";

import Scuare from "../models/Scuare";

class CuartoMouseContext implements IContexto {
  scuare: Scuare;

  constructor() {
    this.scuare = new Scuare(0, 0, 40, 40, "rgba(244, 20, 0, 0.4)");
  }

  mouseMoveHandler = (e: MouseEvent) => {
    this.scuare.x = e.clientX - this.scuare.width / 2;
    this.scuare.y = e.clientY - this.scuare.height / 2;
  };

  update(): void {}
  draw(ctx: CanvasRenderingContext2D): void {
    this.scuare.draw(ctx);
  }

  ejectEvent(event: Event): void {
    switch (event.type) {
      case "mousemove":
    this.mouseMoveHandler(event as MouseEvent);
        break;
      case "click":
        this.scuare.color = "blue";
        break;
    }
  }
}
export default CuartoMouseContext;
