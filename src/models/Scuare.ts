class Scuare {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;

  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 10,
    height: number = 10,
    color: string = "red"
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
export default Scuare;
