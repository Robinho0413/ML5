let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: true };
let sizeImg = 50;

let ball;
let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/1Q6Z6Q6Q/';
let last10Detections = [];

function preload() {
  ml5.setBackend('webgl');
  faceMesh = ml5.facemesh(options);
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();
  faceMesh.detectStart(video, gotfaces);
  ball = { x: width / 2, dir: -15 };
}

function draw() {
  background(255);
  image(video, 0, 0, video.width, video.height);

  noStroke();
  fill(255, 0, 0);
  ellipse(ball.x, height / 2, 100, 100);
  ball.x += ball.dir;
  if (ball.x < 0 || ball.x > width) {
    if (ball.x < 0) ball.x = 0;
    if (ball.x > width) ball.x = width;
    ball.dir *= -1;
  }

  if (faces.length > 0 && faces[0].rightEye) {
    stroke(0, 255, 0);
    strokeWeight(2);
    noFill();
    let mid = createVector(faces[0].rightEye.centerX, faces[0].rightEye.centerY);
    rect(mid.x - sizeImg / 2,
      mid.y - sizeImg / 2,
      sizeImg,
      sizeImg
    );
    if ((ball.x < 100) || (ball.x > width - 100)) {
      let img = createImage(sizeImg, sizeImg);
      img.copy(
        mid.x - sizeImg / 2,
        mid.y - sizeImg / 2,
        sizeImg,
        sizeImg, 0, 0, sizeImg, sizeImg
      );
      if (ball.x < 100) {
        img.save("left_face" + frameCount + ".png");
      }
      else {
        img.save("right_face" + frameCount + ".png");
      }
    }
  }
}

function gotfaces(results) {
  faces = results;
}