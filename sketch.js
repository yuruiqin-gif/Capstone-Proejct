// Capstone Project
// Yurui Qin
// CS30
// Lewis Dot Structure Game

// let startButton;
// let easyMode;

// var timerValue = 10;
// // let gameActivity = false;

// let circleX = 0;
// let circleY = 0;

// let x = 200;
// let y = 200;


function setup(){
  // easyMode.remove();

  //chemical formulas
  // let carbonDioxide = "";

  createCanvas(windowWidth, windowHeight);
  background(102);

  startButton = createButton("Submit Atoms");
  startButton.mousePressed(submitAtoms);
  startButton.style("font-family", "Optima bold");
  startButton.style("font-size", "30px");
  startButton.position(windowWidth/2-75, windowHeight/2);
  //Hydrogen
  let hydrogen = createDiv('H');
  hydrogen.position(100,windowHeight-300);
  hydrogen.size(50,50);
  hydrogen.style('font-size', '50px');
  hydrogen.draggable();

  //Lithium
  let lithium = createDiv('Li');
  lithium.position(100,windowHeight-250);
  lithium.size(50,50);
  lithium.style('font-size', '50px');
  lithium.draggable();

  //Sodium
  let sodium = createDiv('Na');
  sodium.position(100,windowHeight-200);
  sodium.size(50,50);
  sodium.style('font-size', '50px');
  sodium.draggable();

  //Potassium
  let potassium = createDiv('K');
  potassium.position(100,windowHeight-150);
  potassium.size(50,50);
  potassium.style('font-size', '50px');
  potassium.draggable();
  
  //Berryllium
  let berryllium = createDiv('Be');
  berryllium.position(170,windowHeight-250);
  berryllium.size(50,50);
  berryllium.style('font-size', '50px');
  berryllium.draggable();

  //Magnesium
  let magnesium = createDiv('Mg');
  magnesium.position(170,windowHeight-200);
  magnesium.size(50,50);
  magnesium.style('font-size', '50px');
  magnesium.draggable();

  //Calcium
  let calcium = createDiv('Ca');
  calcium.position(170,windowHeight-150);
  calcium.size(50,50);
  calcium.style('font-size', '50px');
  calcium.draggable();

  //Boron
  let boron = createDiv('B');
  boron.position(250,windowHeight-250);
  boron.size(50,50);
  boron.style('font-size', '50px');
  boron.draggable();

  //Aluminium
  let aluminium = createDiv('Al');
  aluminium.position(250,windowHeight-200);
  aluminium.size(50,50);
  aluminium.style('font-size', '50px');
  aluminium.draggable();

  //Carbon
  let carbon = createDiv('C');
  carbon.position(310,windowHeight-250);
  carbon.size(50,50);
  carbon.style('font-size', '50px');
  carbon.draggable();

  //Silicon
  let silicon = createDiv('Si');
  silicon.position(310,windowHeight-200);
  silicon.size(50,50);
  silicon.style('font-size', '50px');
  silicon.draggable();

  //Nitrogen
  let nitrogen = createDiv('N');
  nitrogen.position(370,windowHeight-250);
  nitrogen.size(50,50);
  nitrogen.style('font-size', '50px');
  nitrogen.draggable();

  //Phosphorus
  let phosphorus = createDiv('P');
  phosphorus.position(370,windowHeight-200);
  phosphorus.size(50,50);
  phosphorus.style('font-size', '50px');
  phosphorus.draggable(); 

  //Oxygen
  let oxygen = createDiv('O');
  oxygen.position(420,windowHeight-250);
  oxygen.size(50,50);
  oxygen.style('font-size', '50px');
  oxygen.draggable();

  //Sulfur
  let sulfur = createDiv('S');
  sulfur.position(420,windowHeight-200);
  sulfur.size(50,50);
  sulfur.style('font-size', '50px');
  sulfur.draggable(); 

  //Fluorine
  let fluorine = createDiv('F');
  fluorine.position(470,windowHeight-250);
  fluorine.size(50,50);
  fluorine.style('font-size', '50px');
  fluorine.draggable();

  //Chlorine
  let chlorine = createDiv('Cl');
  chlorine.position(470,windowHeight-200);
  chlorine.size(50,50);
  chlorine.style('font-size', '50px');
  chlorine.draggable(); 

  //Helium
  let helium = createDiv('He');
  helium.position(520,windowHeight-300);
  helium.size(50,50);
  helium.style('font-size', '50px');
  helium.draggable();

  //Neon
  let neon = createDiv('Ne');
  neon.position(520,windowHeight-250);
  neon.size(50,50);
  neon.style('font-size', '50px');
  neon.draggable();

  //Argon
  let argon = createDiv('Ar');
  argon.position(520,windowHeight-200);
  argon.size(50,50);
  argon.style('font-size', '50px');
  argon.draggable();
}


function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function submitAtoms(){

}
// function preload(){
//   title = loadImage("images/title.jpg");
// }

// function setup() {

//   createCanvas(windowWidth, windowHeight);
//   background(title);
//   textSize(100);

//   //Intro Screen Button
//   startButton = createButton("Click To Start");
//   startButton.mousePressed(GameStart);
//   // startButton.style("font-family", "Optima bold");
//   startButton.style("font-size", "30px");
//   startButton.position(windowWidth/2-75, windowHeight/2);
// }

// function draw() {
// }

// // function GameStart() {
// //   background(237, 39, 36);
// //   startButton.remove();

// //   textSize(100);
// //   fill(220);
// //   text('Chose your level', (windowWidth/2)-300, 300);

// //  //Mode selection scene
// //   easyMode = createButton("EASY");
// //   easyMode.mousePressed(playEasy);
// //   easyMode.style("font-size", "30px");
// //   easyMode.position(windowWidth/2, windowHeight/2);
// // }

// // function timer(){
// //   textAlign(CENTER, CENTER);
// //   textSize(100);
// //   text(timerValue, width/2, height/2);
// //   while(timerValue != 0){
// //     if (frameCount % 60 == 0 && timerValue > 0){
// //       timerValue -= 1;
// //     }
// //   }
// //   if (timerValue == 0){
// //     text('FINISHED',50,50);
// //   }
// // }


// function playEasy() { //Easy Mode
//   background(220);
//   easyMode.remove();

//   //chemical formulas
//   let carbonDioxide = "";

//   fill(237, 39, 36);

//   //Hydrogen
//   let hydrogen = createDiv('H');
//   hydrogen.position(100,windowHeight-300);
//   hydrogen.size(50,50);
//   hydrogen.style('font-size', '50px');
//   hydrogen.draggable();

//   //Lithium
//   let lithium = createDiv('Li');
//   lithium.position(100,windowHeight-250);
//   lithium.size(50,50);
//   lithium.style('font-size', '50px');
//   lithium.draggable();

//   //Sodium
//   let sodium = createDiv('Na');
//   sodium.position(100,windowHeight-200);
//   sodium.size(50,50);
//   sodium.style('font-size', '50px');
//   sodium.draggable();

//   //Potassium
//   let potassium = createDiv('K');
//   potassium.position(100,windowHeight-150);
//   potassium.size(50,50);
//   potassium.style('font-size', '50px');
//   potassium.draggable();
  
//   //Berryllium
//   let berryllium = createDiv('Be');
//   berryllium.position(170,windowHeight-250);
//   berryllium.size(50,50);
//   berryllium.style('font-size', '50px');
//   berryllium.draggable();

//   //Magnesium
//   let magnesium = createDiv('Mg');
//   magnesium.position(170,windowHeight-200);
//   magnesium.size(50,50);
//   magnesium.style('font-size', '50px');
//   magnesium.draggable();

//   //Calcium
//   let calcium = createDiv('Ca');
//   calcium.position(170,windowHeight-150);
//   calcium.size(50,50);
//   calcium.style('font-size', '50px');
//   calcium.draggable();

//   //Boron
//   let boron = createDiv('B');
//   boron.position(250,windowHeight-250);
//   boron.size(50,50);
//   boron.style('font-size', '50px');
//   boron.draggable();

//   //Aluminium
//   let aluminium = createDiv('Al');
//   aluminium.position(250,windowHeight-200);
//   aluminium.size(50,50);
//   aluminium.style('font-size', '50px');
//   aluminium.draggable();

//   //Carbon
//   let carbon = createDiv('C');
//   carbon.position(310,windowHeight-250);
//   carbon.size(50,50);
//   carbon.style('font-size', '50px');
//   carbon.draggable();

//   //Silicon
//   let silicon = createDiv('Si');
//   silicon.position(310,windowHeight-200);
//   silicon.size(50,50);
//   silicon.style('font-size', '50px');
//   silicon.draggable();

//   //Nitrogen
//   let nitrogen = createDiv('N');
//   nitrogen.position(370,windowHeight-250);
//   nitrogen.size(50,50);
//   nitrogen.style('font-size', '50px');
//   nitrogen.draggable();

//   //Phosphorus
//   let phosphorus = createDiv('P');
//   phosphorus.position(370,windowHeight-200);
//   phosphorus.size(50,50);
//   phosphorus.style('font-size', '50px');
//   phosphorus.draggable(); 

//   //Oxygen
//   let oxygen = createDiv('O');
//   oxygen.position(420,windowHeight-250);
//   oxygen.size(50,50);
//   oxygen.style('font-size', '50px');
//   oxygen.draggable();

//   //Sulfur
//   let sulfur = createDiv('S');
//   sulfur.position(420,windowHeight-200);
//   sulfur.size(50,50);
//   sulfur.style('font-size', '50px');
//   sulfur.draggable(); 

//   //Fluorine
//   let fluorine = createDiv('F');
//   fluorine.position(470,windowHeight-250);
//   fluorine.size(50,50);
//   fluorine.style('font-size', '50px');
//   fluorine.draggable();

//   //Chlorine
//   let chlorine = createDiv('Cl');
//   chlorine.position(470,windowHeight-200);
//   chlorine.size(50,50);
//   chlorine.style('font-size', '50px');
//   chlorine.draggable(); 

//   //Helium
//   let helium = createDiv('He');
//   helium.position(520,windowHeight-300);
//   helium.size(50,50);
//   helium.style('font-size', '50px');
//   helium.draggable();

//   //Neon
//   let neon = createDiv('Ne');
//   neon.position(520,windowHeight-250);
//   neon.size(50,50);
//   neon.style('font-size', '50px');
//   neon.draggable();

//   //Argon
//   let argon = createDiv('Ar');
//   argon.position(520,windowHeight-200);
//   argon.size(50,50);
//   argon.style('font-size', '50px');
//   argon.draggable();
// }