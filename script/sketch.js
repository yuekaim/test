let x = 1;
let y = 1;
let easing = 0.01;

function setup() {
  if (windowWidth > 600){
        var cns = createCanvas(windowWidth, windowHeight);
}
  noStroke();
}

function draw() {
  fill(0,0,255);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  ellipse(x, y, 66, 66);
}
