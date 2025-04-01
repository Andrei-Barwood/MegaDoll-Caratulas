let colors = ["#C52452", "#F7415F", "#FA768D", "#E23458", "#E45372"];

function setup() {
  createCanvas(3000, 3000);
  noLoop();
}

function draw() {
  background("#98223B");
  let spacing = 300;
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      drawOppositeArcs(x, y, spacing);
    }
  }
}

function drawOppositeArcs(x, y, size) {
  let c1 = random(colors);
  let c2 = random(colors);
  noStroke();
  
  push();
  translate(x + size / 2, y + size / 2);
  
  fill(c1);
  arc(0, 0, size, size, 0, PI / 2);
  arc(0, 0, size, size, PI, 3 * PI / 2);
  
  fill(c2);
  arc(0, 0, size, size, PI / 2, PI);
  arc(0, 0, size, size, 3 * PI / 2, TWO_PI);
  
  pop();
}
