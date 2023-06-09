var y = 100;
var x = 0;
var z = 100;
var r = 200;
var g = 200;
var b = 200;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
noStroke();
    for (x=0;
x <= width;
x = x + 1, y=y+random(-z*0.02,z*0.02)) {

if (z<=10) {
z=10;
}

if (z >= width/2) {
z= width/2;
}
if (y<=5){
r = r + random(-.5,.5);
g = g + random(-.5,.5);
b = b + random(-.5,.5);

fill(r,g,b);

ellipse(x, y, z, z);

}

else if (y<=50 && y>=6){
r = r + random(-.5,.5);
g = g + random(-.5,.5);
b = b + random(-.5,.5);
fill(r,g,b);

ellipse(x, y, z, z);

}

else if (y<=150 && y>=51){ 
r = r + random(-.5,.5);
g = g + random(-.5,.5);
b = b + random(-.5,.5);
fill(r,g,b);

ellipse(x, y, z, z);

}

else if (y<=height/2 && y>=151){
r = r + random(-.5,.5);
g = g + random(-.5,.5);
b = b + random(-.5,.5);
fill(r,g,b);

ellipse(x, y, z, z);

}

else if (y<=height && y>=height/2){
r = r + random(-.5,.5);
g = g + random(-.5,.5);
b = b + random(-.5,.5);
fill(r,g,b);

ellipse(x, y, z, z);
}
}

if (y <= 3) { 
y=y+2;
}

else if (y >= height-3) {
y=y-2;
}

if (r <= 0 || r >=255) {
r=120;
}
 
if (g <= 0 || g >=255) {
g=120;
}

if (b <= 0 || b >=255) {
b = 120;
}

z = z + random(-5, 5)


if (z <= 10 || z >= width/2) {
z = 200;
}
  
 
}

function mousePressed() {
  if (mouseIsPressed) {
  var fs = 
 fullscreen(!fs);

   console.log('pressed');
 }
}

function touchStarted() {
 fs = fullscreen(false);
//  if (!fs) {
      //fullscreen(true);
//}
    console.log('touched');

}

