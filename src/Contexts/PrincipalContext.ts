import LogicGame from "../interfaces/ILogicGame";
import NormalScuare from "../logic/NormalScuare";

class PrincipalContext implements LogicGame {
  scuare: NormalScuare;
  scuare2: NormalScuare;
  constructor() {
    this.scuare = new NormalScuare(0, 0, 100, 100, "red");
    this.scuare2 = new NormalScuare(0, 200, 100, 100, "red");
  }

  logicContext(){
    if(this.scuare.x>100){
        this.scuare.y+=this.scuare.velocity;
    }
    if(this.scuare.x<0){
        this.scuare.y+=this.scuare.velocity;
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
export default PrincipalContext;
