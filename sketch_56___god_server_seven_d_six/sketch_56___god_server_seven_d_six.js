let colors = ["#4A7A26", "#96C934", "#DCF79B", "#BAE159", "#D9F596"];

function setup() {
  createCanvas(3000, 3000);
  noLoop();
}

function draw() {
  background("#AC1E30");
  let spacing = 300;
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      drawIrregularPolygons(x, y, spacing);
    }
  }
}

function drawIrregularPolygons(x, y, size) {
  let c1 = random(colors);
  let c2 = random(colors);
  noStroke();
  
  push();
  translate(x + size / 2, y + size / 2);
  
  fill(c1);
  beginShape();
  vertex(-size / 2, -size / 2);
  vertex(random(-size / 4, size / 4), -size / 2);
  vertex(size / 2, random(-size / 4, size / 4));
  vertex(size / 2, size / 2);
  vertex(random(-size / 4, size / 4), size / 2);
  vertex(-size / 2, random(-size / 4, size / 4));
  endShape(CLOSE);
  
  fill(c2);
  beginShape();
  vertex(-size / 2, -size / 2);
  vertex(random(-size / 4, size / 4), -size / 2);
  vertex(size / 2, random(-size / 4, size / 4));
  vertex(size / 2, size / 2);
  vertex(random(-size / 4, size / 4), size / 2);
  vertex(-size / 2, random(-size / 4, size / 4));
  endShape(CLOSE);
  
  pop();
}
