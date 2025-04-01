void setup() {
  size(3000, 3000);
  background(#CBE4BE);
}

void draw() {
  // Dibujamos algo en la pantalla
  smooth();
  stroke(#629558);
  strokeWeight(3);
  line(20, 20, 1480, 1240);
  strokeWeight(6);
  line(20, 40, 1480, 1240);
  strokeWeight(18);
  line(20, 70, 1480, 1384);
  // Guardamos el archivo como JPG cuando presionamos la tecla 's'
  if (keyPressed && key == 's') {
    save("world tour 2018.jpg"); // Guarda la imagen con el nombre especificado
  }
}
