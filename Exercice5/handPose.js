/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates hand tracking on live video through ml5.handPose.
 */

let handPose;
let video;
let hands = [];

let state = 'démarrage Pierre';
let temps = 200;

let classifier;

function preload() {
    // Load the handPose model
    handPose = ml5.handPose();
}

function setup() {
    createCanvas(640, 480);
    // Create the webcam video and hide it
    video = createCapture(VIDEO, { flipped: true });
    video.size(640, 480);
    video.hide();
    // start detecting hands from the webcam video
    handPose.detectStart(video, gotHands);

    let options = {
        task: "classification",
        debug: true,
    };
}

function draw() {
    // Draw the webcam video
    image(video, 0, 0, width, height);

    // Draw all the tracked hand points
    let centre = { x: 0, y: 0 };
    for (let i = 0; i < hands.length; i++) {
        let hand = hands[i];
        for (let j = 0; j < hand.keypoints.length; j++) {
            let keypoint = hand.keypoints[j];
            fill(0, 255, 0);
            noStroke();
            circle(width - keypoint.x, keypoint.y, 10);
        }
        centre.x /= hand.keypoints.length;
        centre.y /= hand.keypoints.length;
        fill(255, 0, 0);
        circle(width - centre.x, centre.y, 10);
    }

    fill(255);
    textSize(32);
    text(state, 10, 30);
    text(temps, 10, 100);

    if ((state == "démarrage Pierre") && (temps > 0)) {

        temps--;
    } else if
        ((state == "démarrage Pierre") && (temps <= 0)) {
        state = "Pierre";
        temps = 500;
    } else if
        ((state == "Pierre") && (temps > 0)) {
        temps--;
        let inputs = [];
        for (let i = 0; i < hands.length; i++) {
            let hand = hands[i];
            for (let j = 0; j < hand.keypoints.length; j++) {
                let keypoint = hand.keypoints[j];
                inputs.push(keypoint.x - centre.x);
                inputs.push(keypoint.y - centre.y);
            }
            classifier.addData(inputs, ["Pierre"]);
            console.log("adding data to Pierre");
        }
    }
    else if ((state == "Feuille") && (temps <= 0)) {
        state = "démarrage Feuille";
        temps = 200;
    } else if
        ((state == "démarrage Feuille") && (temps > 0)) {
        temps--;
    } else if
        ((state == "démarrage Feuille") && (temps <= 0)) {
        state = "Feuille";
        temps = 500;
    } else if
        ((state == "Feuille") && (temps > 0)) {
        temps--;
        let inputs = [];
        for (let i = 0; i < hands.length; i++) {
            let hand = hands[i];
            for (let j = 0; j < hand.keypoints.length; j++) {
                let keypoint = hand.keypoints[j];
                inputs.push(keypoint.x - centre.x);
                inputs.push(keypoint.y - centre.y);
            }
            classifier.addData(inputs, ["Feuille"]);
            console.log("adding data to Feuille");
        }
    }
}

// Callback function for when handPose outputs data
function gotHands(results) {
    // save the output to the hands variable
    hands = results;
}

function finishedTraining() {
    state = "Entrainement terminé";
}

function gotResults(results) {
    temps = results[0].label + " (" + results[0].confidence.toFixed(2) + ")";
}