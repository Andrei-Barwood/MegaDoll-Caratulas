let stars = [];
let colors = ["#AE741D", "#DC9E41", "#CB8D33", "#FBFDB3"];

function setup() {
  createCanvas(3000, 3000, WEBGL);
  noStroke();
  for (let i = 0; i < 100; i++) {
    stars.push(new Star(random(-1500, 1500), random(-1500, 1500), random(-1000, 1000)));
  }
}

function draw() {
  background("#573932");
  rotateX(frameCount * 0.002);
  rotateY(frameCount * 0.002);
  
  for (let star of stars) {
    star.show();
  }
}

class Star {
  constructor(x, y, z) {
    this.pos = createVector(x, y, z);
    this.size = random(20, 100);
    this.color = random(colors);
  }
  
  show() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    fill(this.color);
    for (let i = 0; i < 5; i++) {
      rotateY(PI / 2.5);
      cone(this.size, this.size * 2);
    }
    pop();
  }
}
