let x = 300;
let y = 20;
let w = 3000;
let h = 3000;

function setup() {
  createCanvas(w, h);
  background("#FCC657");
  stroke("#FD41F8");
  strokeWeight(2);
  noFill();
  noLoop();
}

function draw() {
  let numLines = 10;
  let lineLength = 2900;
  let lineSpacing = 50;
  for (let i = 0; i < numLines; i++) {
    for (let j = 0; j < numLines; j++) {
      let x1 = x + i * lineSpacing;
      let y1 = y + j * lineSpacing;
      let x2 = x1 + lineLength * Math.random();
      let y2 = y1 + lineLength * Math.random();
      line(x1, y1, x2, y2);
    }
  }
}
