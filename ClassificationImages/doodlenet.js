// Initialize the Image Classifier method with DoodleNet.
let classifier;

// Two variable to hold the label and confidence of the result
let clearButton;
let resultsP;
let canvas;

function preload() {
  classifier = ml5.imageClassifier("DoodleNet");
}

function setup() {
  canvas = createCanvas(280, 280);
  background(255);
  classifier.classifyStart(canvas, gotResult);

  // Create 'label' and 'confidence' div to hold results
  resultsP = createP("label");
  // Create a clear canvas button
  clearButton = createButton("clear canvas");
  clearButton.mousePressed(clearCanvas);
}

function clearCanvas() {
  background(255);
}

function draw() {
  strokeWeight(16);
  stroke(0);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

// A function to run when we get any errors and the results
function gotResult(results) {
  // The results are in an array ordered by confidence.
  // console.log(results);
  // Show the first label and confidence
  let label = results[0].label;
  let confidence = results[0].confidence;
  resultsP.html(label + " " + nf(confidence, 0, 2));
}
