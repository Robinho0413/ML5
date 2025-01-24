/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates drawing skeletons on poses for the MoveNet model.
 */

let video;
let bodyPose;
let poses = [];
let connections;
let balls = [];

function preload() {
    // Load the bodyPose model
    bodyPose = ml5.bodyPose();
}

function setup() {
    createCanvas(640, 480);

    // Create the video and hide it
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    // Start detecting poses in the webcam video
    bodyPose.detectStart(video, gotPoses);
    // Get the skeleton connection information
    connections = bodyPose.getSkeleton();
}

function draw() {
    // Draw the webcam video
    image(video, 0, 0, width, height);

    // Draw the skeleton connections
    //   for (let i = 0; i < poses.length; i++) {
    //     let pose = poses[i];
    //     for (let j = 0; j < connections.length; j++) {
    //       let pointAIndex = connections[j][0];
    //       let pointBIndex = connections[j][1];
    //       let pointA = pose.keypoints[pointAIndex];
    //       let pointB = pose.keypoints[pointBIndex];
    //       // Only draw a line if both points are confident enough
    //       if (pointA.confidence > 0.1 && pointB.confidence > 0.1) {
    //         stroke(255, 0, 0);
    //         strokeWeight(2);
    //         line(pointA.x, pointA.y, pointB.x, pointB.y);
    //       }
    //     }
    //   }

    // Draw all the tracked landmark points
    //   for (let i = 0; i < poses.length; i++) {
    //     let pose = poses[i];
    //     for (let j = 0; j < pose.keypoints.length; j++) {
    //       let keypoint = pose.keypoints[j];
    //       // Only draw a circle if the keypoint's confidence is bigger than 0.1
    //       if (keypoint.confidence > 0.1) {
    //         fill(0, 255, 0);
    //         noStroke();
    //         circle(keypoint.x, keypoint.y, 10);
    //       }
    //     }
    //   }

    for (let i = 0; i < poses.length; i++) {
        let pose = poses[i];
        let rightArm = gotRightArm(pose);

        for (let j = 0; j < rightArm.length; j++) {
            let keypoint = rightArm[j];
            // Only draw a circle if the keypoint's confidence is bigger than 0.1
            if (keypoint.confidence > 0.1) {
                console.log(keypoint);
                fill(0, 255, 0);
                noStroke();
                circle(keypoint.x, keypoint.y, 10);
            }
        }
    }


    for (let i = 0; i < poses.length; i++) {
        let pose = poses[i];
        let rightArm = gotRightArm(pose);
        for (let j = 0; j < connections.length; j++) {
            let wrist = rightArm[0];
            let elbow = rightArm[1];

            if (wrist.confidence > 0.1 && elbow.confidence > 0.1) {
                stroke(255, 0, 0);
                strokeWeight(2);
                line(wrist.x, wrist.y, elbow.x, elbow.y);
                throwBall(wrist, elbow);
            }
        }
    }

    for(let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.life--;
        fill(0, 0, 255);
        noStroke();
        circle(ball.x, ball.y, 10);
        if(ball.life <= 0) {
            balls.splice(i, 1);
        }
    }
}

function gotRightArm(pose) {
    let rightArm = [];

    rightArm.push(pose.right_wrist);
    rightArm.push(pose.right_elbow);

    return rightArm;
}

function throwBall(wrist, elbow) {
    let vx = (wrist.x - elbow.x) * 0.1;
    let vy = (wrist.y - elbow.y) * 0.1;
    balls.push({x: wrist.x, y: wrist.y, vx, vy, life: 100});
}

// Callback function for when bodyPose outputs data
function gotPoses(results) {
    // Save the output to the poses variable
    poses = results;
}