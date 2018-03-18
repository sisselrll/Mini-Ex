var sound, amplitude;
var unique = ["Unique?", "Random?", "?"]
var bg;

function preload(){
  sound = loadSound('samgellaitry.mp3');
  bg = loadImage('cat.jpeg');
}
function setup() {
  createCanvas(1000,600);
    sound.loop();
  amplitude = new p5.Amplitude();

}
function draw() {
  background(bg);
  noFill();
  strokeWeight(2);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 700);
  for (var x = 0; x <= width; x += 50) {
    for (var y = 0; y <= height; y += 50) {
      ellipse(x, y, size, size);
    }
  }
push();
  fill(0,0,200,50);
  rect(0,0, 1000,600)
pop();
push();
  noStroke();
  fill(94, 25, 163,99);
  var value = alpha(80);
  ellipse(300,260, 220,220);
  ellipse(634,254, 220,220);
pop();

  showText();
}

  function showText () {
    fill(0,0,255);
    textSize(36);
    text(random(unique), 230, 270);
    text(random(unique), 560, 270);
}
