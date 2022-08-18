class Cajita {
  widht: number;
  height: number;
  x: number;
  y: number;
  grosor: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    grosor: number
  ) {
    this.x = x;
    this.y = y;
    this.widht = width;
    this.height = height;
    this.grosor = grosor;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x, 0, this.widht, this.height);
    ctx.lineCap = "round";
    ctx.lineWidth = this.grosor;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.widht + this.x, this.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(this.widht + this.x, this.y);
    ctx.lineTo(this.x, this.height);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.grosor, this.height);
    ctx.fillRect(this.x, this.y, this.widht, this.grosor);
    ctx.fillRect(this.widht + this.x, this.y, this.grosor, this.height);
    ctx.fillRect(this.x, this.height, this.widht, this.grosor);
  }
}

export default Cajita;
