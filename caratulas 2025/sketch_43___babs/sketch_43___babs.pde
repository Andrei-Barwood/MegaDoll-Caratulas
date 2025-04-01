void setup() {
size(1080, 1920);
smooth();
frameRate(9);
}
void draw() {

background(#DC9E41);
strokeWeight(48);
stroke(#AE741D);
fill(#CB8D33);
ellipse(random(width*0.9), height*0.6, width*0.72, height*0.96);
fill(#FBFDB3);
line(random(width*0.24), 0, width/0.5, height);
line(0, height/0.18, width, height*0.5);

if (keyPressed && key == 's') {
 save("babs.jpg"); 
}
}
