function setup() {
  createCanvas(3000, 3000);
  background("#D4BE93");

  // Dibujar el vaso de vino
  fill("#A4D96B");
  noStroke();
  ellipse(400, 500, 400, 400);

  // Dibujar el vino
  fill("#F2B800");
  ellipse(400, 600, 350, 350);

  // Dibujar las nubes
  for (let i = 0; i < 10; i++) {
    let x = random(200, 600);
    let y = random(400, 600);
    let w = random(50, 150);
    let h = random(25, 75);
    fill("#5FBB4B");
    noStroke();
    ellipse(x, y, w, h);
  }
}

function draw() {
  // Dibujar el tallo del vaso de vino
  noStroke();
  line(400, 500, 400, 700);
}
