// Without humans there is no data flow
var button;
var mic;
var recorder;
var soundFile;
var state = 0;
var col = [0, 0, 0];
function preload (){
  img = loadImage('mund.jpg');
}

function setup() {
  createCanvas (700,500);
  background (img);
  // Button
  button = createButton('Record Audio');
  button.position(320, 20);
  button.style('background', '#BEC0C5');
  button.size(100,40);
  button.mousePressed(buttonPressed);
  // Microphone
  mic = new p5.AudioIn();
    mic.start();
  //recorder
  recorder = new p5.SoundRecorder ();
  //Connecting the micropone to the recorder
    recorder.setInput(mic);
  //The soundfile will save and playback the recording
  soundFile = new p5.SoundFile ();

  // FFT
  fft = new p5.FFT();
  textSize(36);
  text('Share your voice', 30, 50);
}

function buttonPressed () {
  if (state === 0 && mic.enabled) {
    // Choose a random color
    col = [random(0, 255), random(0, 255), random(0, 255)];
    button.html ('Stop recording');
    //Record to the p5.SoundFile
    recorder.record(soundFile);
    // State ++ increases the value by 1
    state ++;
  }
 else if (state === 1) {
    button.html ('Play audio');
    recorder.stop();
    state ++;
  }
  else if (state === 2) {
      //button.html ('Play audio');
      soundFile.play(); // Playing the result
      button.html ('Record again');

      state = 0; // Allows you to record again (Resets state variable)
  }
}

function draw() {

   var spectrum = fft.analyze();
   push();
   beginShape();
   noStroke();
   // Put in the randomly generated color
   fill(col[0], col[1], col[2]);
   for (i = 0; i < spectrum.length; i++) {
     vertex(i, map(spectrum[i], 0, 255, height, 0) ); //255 = scale
   }
   endShape();
   pop();
}
