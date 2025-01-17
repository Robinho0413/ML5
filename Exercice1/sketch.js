let data = [
    { taille: 82, poids: 14, age: 10, animal: "chat" },
    { taille: 80, poids: 23, age: 10, animal: "chien" },
    { taille: 43, poids: 24, age: 13, animal: "chien" },
    { taille: 45, poids: 39, age: 10, animal: "chien" },
    { taille: 53, poids: 20, age: 10, animal: "chien" },
    { taille: 54, poids: 23, age: 6, animal: "chat" },
    { taille: 37, poids: 15, age: 1, animal: "chat" },
    { taille: 59, poids: 45, age: 12, animal: "chien" },
    { taille: 61, poids: 25, age: 5, animal: "chat" },
    { taille: 68, poids: 35, age: 13, animal: "chien" },
    { taille: 49, poids: 22, age: 4, animal: "chat" },
    { taille: 70, poids: 41, age: 8, animal: "chien" },
    { taille: 42, poids: 18, age: 3, animal: "chat" },
    { taille: 77, poids: 50, age: 7, animal: "chien" },
    { taille: 56, poids: 26, age: 6, animal: "chat" },
    { taille: 64, poids: 33, age: 9, animal: "chien" },
    { taille: 38, poids: 16, age: 2, animal: "chat" },
    { taille: 72, poids: 47, age: 11, animal: "chien" },
    { taille: 55, poids: 21, age: 4, animal: "chat" },
    { taille: 67, poids: 38, age: 8, animal: "chien" },
    { taille: 47, poids: 20, age: 3, animal: "chat" },
    { taille: 78, poids: 48, age: 9, animal: "chien" },
    { taille: 50, poids: 22, age: 5, animal: "chat" },
    { taille: 65, poids: 36, age: 7, animal: "chien" },
    { taille: 39, poids: 17, age: 2, animal: "chat" },
    { taille: 74, poids: 44, age: 10, animal: "chien" },
    { taille: 58, poids: 25, age: 6, animal: "chat" },
    { taille: 69, poids: 40, age: 8, animal: "chien" },
    { taille: 41, poids: 19, age: 3, animal: "chat" },
    { taille: 75, poids: 46, age: 9, animal: "chien" },
    { taille: 52, poids: 23, age: 5, animal: "chat" },
    { taille: 66, poids: 37, age: 7, animal: "chien" },
    { taille: 40, poids: 18, age: 2, animal: "chat" },
    { taille: 71, poids: 43, age: 11, animal: "chien" },
    { taille: 57, poids: 24, age: 6, animal: "chat" },
    { taille: 63, poids: 32, age: 8, animal: "chien" },
    { taille: 44, poids: 20, age: 3, animal: "chat" },
    { taille: 76, poids: 49, age: 9, animal: "chien" },
    { taille: 51, poids: 22, age: 5, animal: "chat" },
    { taille: 62, poids: 30, age: 7, animal: "chien" },
    { taille: 48, poids: 21, age: 4, animal: "chat" },
    { taille: 73, poids: 45, age: 10, animal: "chien" },
    { taille: 60, poids: 26, age: 6, animal: "chat" },
    { taille: 68, poids: 34, age: 8, animal: "chien" },
    { taille: 46, poids: 19, age: 3, animal: "chat" },
    { taille: 79, poids: 50, age: 9, animal: "chien" },
    { taille: 53, poids: 23, age: 5, animal: "chat" },
    { taille: 64, poids: 31, age: 7, animal: "chien" },
    { taille: 42, poids: 18, age: 2, animal: "chat" },
    { taille: 70, poids: 42, age: 8, animal: "chien" }
 
  ];

  // Classification d'un animal en fonction de sa taille, de son poids et de son âge
 
//   let classifier;
//   let modelReady = false;
//   let tailleSlider, poidsSlider, ageSlider;
//   let taille = 50, poids = 20, age = 5;
//   let label = "training";
 
//   function setup() {
//     createCanvas(640, 240);
 
//     // For this example to work across all browsers
//     // "webgl" or "cpu" needs to be set as the backend
//     ml5.setBackend("webgl");
 
//     // Step 2: set your neural network options
//     let options = {
//       task: "classification",
//       debug: true,
//     };
 
//     // Step 3: initialize your neural network
//     classifier = ml5.neuralNetwork(options);
 
//     // Step 4: add data to the neural network
//     for (let i = 0; i < data.length; i++) {
//       let item = data[i];
//       let inputs = [item.taille, item.poids, item.age];
//       let outputs = [item.animal];
//       classifier.addData(inputs, outputs);
//     }
 
//     // Step 5: normalize your data;
//     classifier.normalizeData();
 
//     // Step 6: train your neural network
//     classifier.train({ epochs: 200 }, finishedTraining);
 
//     // Create sliders for dynamic input
//     tailleSlider = createSlider(30, 100, taille);
//     tailleSlider.position(10, 10);
//     poidsSlider = createSlider(10, 50, poids);
//     poidsSlider.position(10, 40);
//     ageSlider = createSlider(1, 15, age);
//     ageSlider.position(10, 70);
//   }
 
//   // Step 7: use the trained model
//   function finishedTraining() {
//     modelReady = true;
//     console.log("Model trained and ready!");
//   }
 
//   function draw() {
//     background(200);
 
//     // Update values based on slider positions
//     taille = tailleSlider.value();
//     poids = poidsSlider.value();
//     age = ageSlider.value();
 
//     // Display current values
//     fill(0);
//     textSize(16);
//     text(`Taille: ${taille}`, 200, 20);
//     text(`Poids: ${poids}`, 200, 50);
//     text(`Âge: ${age}`, 200, 80);
 
//     // Display label
//     textSize(32);
//     textAlign(CENTER, CENTER);
//     text(label, width / 2, height / 2);
 
//     // Classify if the model is ready
//     if (modelReady) {
//       const myInput = [taille, poids, age];
//       classifier.classify(myInput, gotResults);
//     }
//   }
 
//   function gotResults( results) {
   
//     // Update label with the most confident prediction
//     if (results && results.length > 0) {
//       label = `${results[0].label} (${(results[0].confidence * 100).toFixed(2)}%)`;
//     }
//   }
 

// Prédiction du poids d'un chien en fonction de sa taille et de son âge
 
let classifier;
let modelReady = false;
let tailleSlider, ageSlider;
let taille = 67, age = 12;
let predictedWeight = "En attente...";

function setup() {
  createCanvas(640, 240);

  ml5.setBackend("webgl");

  // Step 2: Set neural network options for regression
  let options = {
    task: "regression",
    debug: true,
  };

  // Step 3: Initialize the neural network
  classifier = ml5.neuralNetwork(options);

  // Step 4: Add data for regression
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    if (item.animal === "chien") {
      let inputs = { taille: item.taille, age: item.age };
      let output = { poids: item.poids };
      classifier.addData(inputs, output);
    }
  }

  // Step 5: Normalize the data
  classifier.normalizeData();

  // Step 6: Train the model
  classifier.train({ epochs: 200 }, finishedTraining);

  // Sliders for input
  tailleSlider = createSlider(50, 90, taille);
  tailleSlider.position(10, 10);
  ageSlider = createSlider(5, 15, age);
  ageSlider.position(10, 40);
}

function finishedTraining() {
  modelReady = true;
  console.log("Modèle entraîné et prêt !");
}

function draw() {
  background(200);

  taille = tailleSlider.value();
  age = ageSlider.value();

  // Display current slider values
  fill(0);
  textSize(16);
  text(`Taille: ${taille}`, 200, 20);
  text(`Âge: ${age}`, 200, 50);

  // Display predicted weight
  textSize(32);
  textAlign(CENTER, CENTER);
  text(`Poids prédit: ${predictedWeight}`, width / 2, height / 2);

  // Make prediction if the model is ready
  if (modelReady) {
    const input = { taille, age };
    classifier.predict(input, gotResults);
  }
}

function gotResults(results) {
 
  if (results.length > 0) {
    predictedWeight = results[0].value.toFixed(2) + " kg";
  }
}
