interface IContexto {
    update(): void;
    draw(ctx: CanvasRenderingContext2D): void;
    ejectEvent(event: Event): void;
  }
  
  export default IContexto;
  