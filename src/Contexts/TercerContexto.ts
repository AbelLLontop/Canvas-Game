import IContexto from "../core/interfaces/IContexto";
import Cajita from "../models/Cajita";

class TercertContexto implements IContexto {
  cajitas: Array<Cajita>=[];
  constructor() {
    const cantidadCajitas = 10;
    for (let i = 0; i <44*cantidadCajitas; i += 44) {
      this.cajitas.push(new Cajita(i, 0, 40, 40, 4));
    }
  }
  ejectEvent(event: Event): void {
    throw new Error("Method not implemented.");
  }

  update(): void {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.cajitas.forEach((cajita) => {
      cajita.draw(ctx);
    });
  }
}
export default TercertContexto;
