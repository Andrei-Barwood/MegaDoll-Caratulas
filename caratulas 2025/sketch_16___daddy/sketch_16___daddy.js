function setup() {
  createCanvas(3000, 3000, WEBGL);
  noStroke();
}

function draw() {
  background("#1E093C");
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  let spacing = 100;

  // Dibujar 4 conos
  for (let i = 0; i < 4; i++) {
    push();
    let x = (i % 2 === 0 ? -1 : 1) * spacing;
    let y = (i < 2 ? -1 : 1) * spacing;
    translate(x, y, 0);
    fill("#662F89");
    cone(40, 80);
    pop();
  }

  // Dibujar 6 esferas
  for (let i = 0; i < 6; i++) {
    push();
    let angle = (TWO_PI / 6) * i;
    let x = cos(angle) * spacing * 1.5;
    let y = sin(angle) * spacing * 1.5;
    translate(x, y, 0);
    fill("#8D5DA4");
    sphere(30);
    pop();
  }
}
