let cols, rows;
let scl = 50; // Tamaño de la cuadricula
let w = 3000;
let h = 3000;
let terrain = [];
let flying = 0;

function setup() {
  createCanvas(3000, 3000, WEBGL);
  cols = w / scl;
  rows = h / scl;
  
  for (let y = 0; y < rows; y++) {
    terrain[y] = [];
    for (let x = 0; x < cols; x++) {
      terrain[y][x] = 0; // Inicializamos con 0
    }
  }
}

function draw() {
  background('#4A1767');
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);
  
  flying -= 0.05;
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[y][x] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }
  
  for (let y = 0; y < rows - 1; y++) {
    for (let x = 0; x < cols - 1; x++) {
      let c = map(terrain[y][x], -100, 100, 0, 1);
      let col = lerpColor(color('#794897'), color('#5E50A0'), c);
      fill(col);
      stroke("#82C1DC");
      
      beginShape(TRIANGLE_STRIP);
      vertex(x * scl, y * scl, terrain[y][x]);
      vertex(x * scl, (y + 1) * scl, terrain[y + 1][x]);
      vertex((x + 1) * scl, y * scl, terrain[y][x + 1]);
      vertex((x + 1) * scl, (y + 1) * scl, terrain[y + 1][x + 1]);
      endShape();
    }
  }
}
