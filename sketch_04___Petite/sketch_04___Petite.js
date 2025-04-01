function setup() {
  createCanvas(3000, 3000);
  background("#EBE68E");
  noStroke();
}

function draw() {
  // Cabeza
  fill("#FAE9C2");
  ellipse(width / 2, height / 2, 200, 200);

  // Orejas
  ellipse(width / 2 - 80, height / 2 - 80, 50, 50);
  ellipse(width / 2 + 80, height / 2 - 80, 50, 50);

  // Ojos
  strokeWeight(3);
  fill("#A4D96B");
  ellipse(width / 2 - 30, height / 2 - 30, 30, 30);
  ellipse(width / 2 + 30, height / 2 - 30, 30, 30);

  // Pupilas
  fill("#EBE68E");
  ellipse(width / 2 - 30, height / 2 - 30, 15, 15);
  ellipse(width / 2 + 30, height / 2 - 30, 15, 15);

  // Nariz
  stroke("#F2B800");
  strokeWeight(12);
  fill("#A4D96B");
  triangle(width / 2 - 15, height / 2 + 20, width / 2 + 15, height / 2 + 20, width / 2, height / 2 + 50);

}
