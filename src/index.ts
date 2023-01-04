export function initialize(fullscreen = false) {
  const $maybeCanvas = document.querySelector("canvas");
  if (!$maybeCanvas) {
    return;
  }
  const $canvas : HTMLCanvasElement = $maybeCanvas;
  const maybeCtx = $canvas.getContext("2d");
  if (!maybeCtx) {
    return;
  }
  const ctx : CanvasRenderingContext2D = maybeCtx;
  if (fullscreen) {
    $canvas.width = window.innerWidth;
    $canvas.height = window.innerHeight;
    $canvas.style.position = "absolute";
    $canvas.style.top = "0";
    $canvas.style.left = "0";
    $canvas.style.backgroundColor = "black";
    window.addEventListener("resize", function() {
      $canvas.width = window.innerWidth;
      $canvas.height = window.innerHeight;
      draw($canvas, ctx);
    })
  }
  draw($canvas, ctx);
}

function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 50, 50);
  ctx.fillStyle = "blue";
  ctx.fillRect(30, 30, 50, 50);  
}

export const Greeter = (name: string) => `Hello ${name}`;
