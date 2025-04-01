function setup() {
  createCanvas(3000, 3000);
  noLoop(); // Solo dibuja una vez
}

function draw() {
  background("#CEC8D1");
  stroke("#EFEDED");
  strokeWeight(24);
  // Colores de la paleta
  let colors = ['#CEC8D1', '#EFEDED', '#BFBAC2', '#E0DDE3'];

  // Tamaño de los rectángulos ajustado al lienzo grande
  let rectSize = width / 6; // Tamaño proporcional a la dimensión del lienzo
  
  // Dibuja los rectángulos con los colores de la paleta
  fill(colors[0]); // Light gray
  rect(width / 6, height / 6, rectSize, rectSize);
  
  fill(colors[1]); // Middle gray
  rect(width / 3, height / 3, rectSize, rectSize);
  
  fill(colors[2]); // Dark gray
  rect(width / 2, height / 2, rectSize, rectSize);
  
  fill(colors[3]); // Another shade of gray
  rect(width / 1.5, height / 1.5, rectSize, rectSize);
}
