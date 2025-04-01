function setup() {
  createCanvas(3000, 3000, WEBGL);
  background('#E9D461');
  noStroke();
}

function draw() {
  let colors = ['#FAF5AB', '#F3E488', '#E581B1', '#F3B5CF'];
  
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  
  for (let i = 0; i < 6; i++) {
    push();
    let x = random(-500, 500);
    let y = random(-500, 500);
    let z = random(-500, 500);
    translate(x, y, z);
    fill(colors[i % colors.length]);
    box(random(150, 300), random(100, 250), random(50, 200));
    pop();
  }
}
