function setup() {
  createCanvas(3000, 3000);
  background('#532075'); // Color de fondo

  let colors = ['#C181DA', '#BF94DE', '#DEC9EE']; // Paleta de colores

  stroke('#DEC9EE'); // Color de las líneas
  strokeWeight(10);
  
  // Dibujar tres líneas aleatorias
  let x1 = random(500, 2500);
  let y1 = random(500, 2500);
  let x2 = random(500, 2500);
  let y2 = random(500, 2500);
  let x3 = random(500, 2500);
  let y3 = random(500, 2500);

  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x3, y3, x1, y1);
  
  // Dibujar cuatro triángulos alrededor de las líneas
  noStroke();
  fill(random(colors));
  triangle(x1, y1, x2, y2, random(500, 2500), random(500, 2500));
  
  fill(random(colors));
  triangle(x2, y2, x3, y3, random(500, 2500), random(500, 2500));
  
  fill(random(colors));
  triangle(x3, y3, x1, y1, random(500, 2500), random(500, 2500));
  
  fill(random(colors));
  triangle(x1, y1, x2, y2, x3, y3);
}
