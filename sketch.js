// Capstone Project
// Yurui Qin
// CS30
// Lewis Dot Structure Game

let startButton;
let easyMode;

var timerValue = 10;
let gameActivity = false;

let circleX = 0;
let circleY = 0;

let x = 200;
let y = 200;
let dragging = false;

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);

  textSize(100);
  text('Lewis Dot Sim', (windowWidth/2)-200, 300);
  //Intro Screen Button
  startButton = createButton("Click To Start");
  startButton.mousePressed(GameStart);
  // startButton.style("font-family", "Optima bold");
  startButton.style("font-size", "30px");
  startButton.position(windowWidth/2, windowHeight/2);
}

function draw() {
}

function GameStart() {
  background(237, 39, 36);
  startButton.remove();

  textSize(100);
  fill(220);
  text('Chose your level', (windowWidth/2)-300, 300);

 //Mode selection scene
  easyMode = createButton("EASY");
  easyMode.mousePressed(playEasy);
  easyMode.style("font-size", "30px");
  easyMode.position(windowWidth/2, windowHeight/2);
}

function timer(){
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timerValue, width/2, height/2);
  while(timerValue != 0){
    if (frameCount % 60 == 0 && timerValue > 0){
      timerValue -= 1;
    }
  }
  if (timerValue == 0){
    text('FINISHED',50,50);
  }
}


function playEasy() { //Easy Mode
  background(220);
  easyMode.remove();
  gameActivity = true;
  // timer();

  //chemical formulas
  let carbonDioxide = "";

  fill(237, 39, 36);

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
  boron.position(190,windowHeight-250);
  boron.size(50,50);
  boron.style('font-size', '50px');
  boron.draggable();

  // let atom = circle(circleX,circleY, 25)
  // atom.mousePressed(mouseX, mouseY, 25)

  ///////////////////////////////////////////
  // while (true){
  //   if(dragging){
  //     x = mouseX;
  //     y = mouseY;
  //   }

  //   noStroke();
  //   ellipse(x,y,50,50);

  //   if(dist(x, y, mouseX, mouseY) < diameter/2){
  //     dragging = true;
  //   }
  //   dragging = false;
  // }
}

// function mousePressed() {
//   //check if mouse is over the ellipse
//   if(dist(x, y, mouseX, mouseY) < diameter/2){
//     dragging = true;
//   }
// }

// function mouseReleased(){
//   dragging = false;
// }

// class Planet{
//   constructor(x, y){
//     this.x = x;  this.y = y;  this.s = 100;
//     this.atoms = [];
//   }

//   relocate(){
//     myPlanet.x = mouseX;
//     myPlanet.y = mouseY;
//     for(let a of this.atoms){
//       a.x = mouseX;
//       a.y = mouseY;
//     }
//   }

//   createAtoms(){
//     this.atoms.push(new Atoms(this.x, this.y));
//   }
  
//   display(){ //draw the moon as a circle at its location
//     circle(this.x, this.y, this.s);
//     for (let a of this.Atoms){
//       a.update();
//     }
//   }
// }

// class Atoms{
//   constructor(x,y){
//     this.x = x; this.y = y; this.speed = 2;
//     this.angle = 0; this.orbitRadius = 80;
//     this.s = 25;
//   }
//   update(){
//     this.move();
//     this.display();
//   }
//   move(){
//     this.angle += this.speed;
//   }
//   display(){
//     push();
//     translate(this.x, this.y);
//     rotate(this.angle);
//     circle(this.orbitRadius,0,this.s);
//     pop();
//   }
// }

// var timerValue = 100;
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(255);
//   textAlign(CENTER, CENTER);
//   textSize(100);
//   text(timerValue, width/2, height/2);
//   if (frameCount % 60 == 0 && timerValue > 0){
//     timerValue -= 1;
//   }
//   if (timerValue == 0){
//     text('FINISHED',width/2, height/2);
//   }
// }