var song, analyzer;
function preload() {
  song = loadSound("bicycle.mp3");
}

function setup() {
  createCanvas(710, 200);
  song.loop();
  //The loop does so the song keeps repeating itself
  // If I put the song under function setup, the song will not be loaded before the event

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background('#f4a214');

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(255);
  stroke('#f1eb46');
  strokeWeight(10);
  //No stroke around the ellpise

  // Draw an ellipse with size based on volume
  ellipse(width/4.7, height/2, 10+rms*900, 10+rms*900);
  ellipse(width/2, height/2, 10+rms*600, 10+rms*600);
  ellipse(width/1.3, height/2, 10+rms*900, 10+rms*900);
  //width and height changes the position of the ellipse.
  // the rms numbers changes the size of the ellipse due to the volume.
}
