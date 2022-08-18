import IContexto from "./IContexto";

interface IControllerContext {
    update(): void;
    draw(ctx: CanvasRenderingContext2D): void;
    addContexts(contexts: Array<IContexto>): void;
  }
  
  export default IControllerContext;
  