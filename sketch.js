let theShader;
let chita;

function preload() {
  
  theShader = loadShader("webcam.vert", "webcam.frag");

}

function setup() {
  
  createCanvas(1280, 720, WEBGL);

  chita = createVideo("chitry9.mp4");
  chita.loop();
  chita.hide();
  noStroke();
  
}

function draw() {
  
   //if (frameCount === 200) {
    //capturer.start();
  //}
  
  shader(theShader);
  theShader.setUniform('tex0', chita);

  rect(0, 0, width, height);
  
  //if (frameCount < 350) {
    //capturer.capture(canvas);
    
  //} else if (frameCount === 350) {
     //capturer.save();
     //capturer.stop();
  //}
}