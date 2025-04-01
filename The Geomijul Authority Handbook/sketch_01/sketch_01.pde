// comienzo ecuaciones algebraicas

float eleven(float letterX){
  return (3 * letterX + 36);
}

float eleven1(float letterX) {
  return (18 * letterX + 9);
}

// final ecuaciones algebraicas


// letter N
float maxSize = (random(504));
float minSize = (random(216));

// letter M
float amplitude = 50;
float frequency = 0.02;

// letterB
PImage grid2;
PImage img;
PFont MegaDoll;
int counter = 0;
float angle = 0;

// letterV

// letterC

// letterX
float[] verticesX = new float[3];
float[] verticesY = new float[3];
float centerX;

void setup() {
  size(1280,800, P3D);
  frameRate(30);
  colorMode(HSB);
  background(195, 80, 197);
  
  // letterX
  
    
  
  // Declaración de grid2
  grid2 = createImage(400, 400, GIF);
  grid2 = loadImage("grid2.gif");
  
  
  // Declaración Electricity
  img = loadImage("electricity.png");
  
  // Declaración tipografia de Mega Doll
  MegaDoll = createFont("Evilz-JJ1a.ttf", 102); 
}

void letterM(){
  if (keyPressed){
    if (key == 'm' || key == 'M'){
      // implementar HSB
      colorMode(HSB);
      fill(176, 107, 182);
      strokeWeight(2);
      colorMode(HSB);
      stroke(195, 80, 197);
      translate(frameCount*6, 20);
      rotate(radians(frameCount*6));
      float sclSize = sin(radians(frameCount * 2));
      scale(map(sclSize, -1, 1, .21, 1));
      triangle(random(eleven1(-360)), random(eleven1(40)), -120, random(eleven1(10)), random(eleven1(12)), -20);
      colorMode(HSB);
      color(176.07143, 107.88461, 182.0);
      colorMode(HSB);
      fill(176.07143, 107.88461, 182.0);
      strokeWeight(2);
      colorMode(HSB);
      stroke(195.3629, 80.25381, 197.0);
      translate(frameCount*2, 10);
      rotate(PI/3.0+(frameCount*3));
      float sclSize1 = sin(radians(frameCount * .5));
      scale(map(sclSize1, -11, 12, .21, 1));
      triangle(random(eleven1(-160)), random(eleven1(40)), -120, random(eleven1(10)), random(eleven1(12)), -20);     
      colorMode(HSB);
      color(176.07143, 107.88461, 182.0);
      fill(195.3629, 80.25381, 197.0);
      strokeWeight(4); 
      colorMode(HSB);
      stroke(195.3629, 80.25381, 197.0);
      translate(width/2, height/2);
      rotate(PI/3.0);
      float yOffset = amplitude * sin(frameCount * frequency);
      triangle(random(eleven(-60)), random(eleven1(40)), -120, random(eleven(10)), random(eleven(12)), -20);
    }
  }
}


void letterN() {
  if (keyPressed) {
    if (key == 'n' || key == 'N') {
      colorMode(HSB);
      fill(179.38313, 78.54, 250.0);
      strokeWeight(2);
      colorMode(HSB);
      stroke(181.28906, 64.0, 255.0);
      translate(frameCount*2, frameCount/2);
      rotateZ(width/12*1);
      float size = map(sin(frameCount * 10.05), -10, 10, minSize, maxSize);
      // implementar triangulos en remplazo de los rectangulos
      triangle(random(eleven(160.6590)), random(eleven1(40)), random(-120), random(eleven(10)), random(eleven(12)), -20);
      // background changer
            
    }
  }
}


void letterB() {
 if(keyPressed) {
    if (key == 'b' || key == 'B') {
 
      colorMode(HSB);
      color color1 = color(190.94202, 207.0, 170.0); // Morado Neon
      colorMode(HSB);
      color color2 = color(232.31865, 193.0, 255.0); // Fucsia Neon
      float randomValue = random(2);
      //color bgColor = lerpColor(color1, color2, randomValue);
      //background(color1);



counter++;

if (counter % 3 == 1) {
      colorMode(HSB);
      background(174.55357, 176.2963, 81.0);
} else if (counter % 3 == 2) {
  colorMode(HSB);
  background(175.90277, 144.0, 255.0);
} else {
  colorMode(HSB);
  background(161.50002, 15.0, 255.0);
}
    // triangulos
      translate(width/-20, height/280);
      rotate(angle * eleven1(50.3));
      colorMode(HSB);
//      fill(0.0, 0.0, 255.0);
      strokeWeight(3);
      stroke(color2);
      //triangle(-150 + frameCount*2, -450, -850, -381, random(9), 90);
      
      
      // implementacion del triangulo con cruz en la punta
      fill(174.55357, 176.2963, 81.0);
      triangle(-150 + frameCount*2, -450, -850, -381, random(9), 90);
      stroke(175.90277, 144.0, 255.0);
      strokeWeight(4);
      line(random(200), random(450), 200, random(20));
      line(180, random(30), 220, 30);
      angle += 0.05;
      
  
      // Definición de Electricity
      image(img, 300, 30, img.width * 2, img.height * 2);
     
      // tipografia de Mega Doll
      textFont(MegaDoll); 
      fill(116.3058, 233.14285, 245.0);
      text(("f"), random(150), 100);
  
  
    }
  }
}

void letterV() {
  if (keyPressed) {
    if (key == 'v' || key == 'V') {
      // Definición de grid2
      image(grid2, 0, 0, width, height);
      
      // triangulo en traslación
      float x1 = 20;
      float y1 = 10;
      float x2 = 10;
      float y2 = 30;
      float x3 = 30;
      float y3 = 30;
      
      fill(0);
      triangle(random(eleven1(30)), random(eleven1(40)), -12, random(eleven1(10)), random(eleven1(12)), -20);
      
      for (int i = 0; i < 5; i++) {
        translate(50, 50);
        fill(255 ,0, 0);
        float sclSize = sin(radians(frameCount * 2));
        scale(map(sclSize, -1, 81, .21, 1));
        triangle(random(eleven1(30)), random(eleven1(40)), -10, random(eleven1(10)), random(eleven1(12)), -20);
      }
    }
  }
}

void letterC() {
  if (keyPressed) {
    if (key == 'c' || key == 'C') {
      colorMode(HSB);
      background(161.50002, 15.0, 255.0);
      float size = map(cos(frameCount * 12), -240, 432, minSize, maxSize);
      colorMode(HSB);
      stroke(175.90277, 144.0, 255.0);
      line(random(20), 780, random(1840), 200);
    }
  }
}

void letterX() {
  if (keyPressed && (key == 'x' || key == 'X')) {
    colorMode(HSB);
    background(176.07143, 176.2963, 81.0);
    for (int i = 0; i < 3; i++) {
      verticesX[i] = random(width - 600, width); // Genera coordenadas x en el lado derecho
      verticesY[i] = random(height);
    }
    
    centerX = random(width - 10, width); // Genera coordenada x para el centro en el lado derecho
    
    colorMode(HSB);
    stroke(175.90277, 144.0, 255.0);
    line(random(20), 780, random(1840), 200);
    colorMode(HSB);
    stroke(116.3058, 233.14285, 245.0);
    colorMode(HSB);
    fill(161.50002, 15.0, 255.0);
    triangle(verticesX[0], verticesY[0], verticesX[1], verticesY[1], verticesX[2], verticesY[2]);
  }
}

void moveTriangle() {
  centerX += 1; // Incrementa la coordenada x del centro para mover hacia la derecha
  for (int i = 0; i < verticesX.length; i++) {
    verticesX[i] += 1; // Incrementa las coordenadas x de los vértices para mover hacia la derecha
  }
  
  // Si el centro del triángulo llega al borde derecho de la ventana, reinicia su posición
  if (centerX > width) {
    centerX = 150; // Coordenada x del borde izquierdo de la ventana
    // Reinicia las coordenadas x de los vértices para mantener el triángulo en la ventana
    for(int i = 0; i < verticesX.length; i++) {
      verticesX[i] -= width;
    }
  }
}

  
void draw() {
  letterM();
  letterN();
  letterB();
  letterV();
  letterC();
  // letterX();
  letterX();
  moveTriangle();
}
