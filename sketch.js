var regularImg; // Declare variable 'img'.
var inverseImg;
var bRegular = true;
var imageList = [];
var img;
var state=1;
var stateOne=1;
var stateTwo=2;
var stateThree=3;
var stateFour=4;
var stateFive=5;
var stateSix=6;
var stringList;
var displayString="";
var mySound;
var startMillis;      // for slides
var startTextMillis;   // for text


// preload() will execture before setup()
function preload() {
  imageList[0] = loadImage('assets/image1.jpg'); 			
  imageList[1] = loadImage('assets/image2.jpg');
  imageList[2] = loadImage('assets/image3.jpg');
  imageList[3] = loadImage('assets/image4.jpg');
  imageList[4] = loadImage('assets/image5.jpg');
  imageList[5] = loadImage('assets/image6.jpg'); 
  stringList= ['NARUTO', 'SAILOR MOON', 'ATTACK ON TITAN', 'ONE PUNCH MAN', 'MY HERO ACADEMIA', 'FULL METAL ALCHEMIST: BROTHERHOOD'];
  mySound = loadSound("assets/NarutoTheme.mp3");
}

function setup() {

	imageMode(CENTER);
  
	createCanvas(1024, 800);

  startMillis = millis();

}

function draw() {
	background(0);
  // When timer expires, after 1000ms, choose a new random image
  if( millis() > startMillis + 1000 ) {	
    // Displays the image at center point
    //image(img, width/2, height/2, random(mouseX), random(mouseY));
    //chooseNewImage();
    state++;
    displayString=setText();
    if(state==7){
      state=1;
    }

    startMillis = millis();
 }

 setImage(state);
  
  // draw the image
  image(img, width/2, height/2);
}

function setImage(stateParam){
  img=imageList[stateParam-1];

  drawOne();
  drawTwo();
  drawThree();
  drawFour();
  drawFive();
  drawSix();
}

/*if stateOne==1 is true (it is) and if the mouse is moved the elipses height and width
  change at the speed the mouse moves. the x&y ellipses invert as opposites */
function drawOne(){
  if (stateOne==1){
    let x = mouseX;
    let y = mouseY;
    let ix = width - mouseX;  // Inverse X
    let iy = height - mouseY; // Inverse Y
    fill(172, 148, 1232);
    ellipse(x, height/2, y, y);
    fill(78,87,252);
    ellipse(ix, height/2, iy, iy);
  }
}

/*if stateTwo==2 is true, (it is) the left arrow is pressed it shifts the images to the left 
  as well as changes the background color. if the right key is preseed it shifts the images
  to the right*/
function drawTwo(){
  if(stateTwo==2){
    let value = 0; //sets color
    fill(value);
    if (keyCode === LEFT_ARROW) {
      value = 255;
      background(217,110,110);
    } else if (keyCode === RIGHT_ARROW) {
        value = 0;
  }
}
  }

function setText(){
  var x=random(stringList); //allows it to be iterated through random and returns the "value"
  return x;
}
/*if stateThree==3 is true (it is) it will display the text from the timer above in the
  font selections below*/
function drawThree(){
  fill(255,130,0);
  textSize(40);
  textFont('Brush Script MT');
  text(displayString,170,100);
}

//function to press the mouse to trigger sound
function mousePressed(){
  mySound.play();
}

//if stateFour=4 (it does) the function will call mousePressed() and the sound will play
function drawFour(){
  if(stateFour==4){
    mousePressed();
  }
}

/*if stateFive==5, a line will be printed at mouseX,mouseY, and move around as per those
  locations*/
function drawFive(){
  if(stateFive==5){
    strokeWeight(5);
    stroke(108,233,158);
    line(mouseX,0,mouseY,500);
    noStroke();
  }
}

/*if stateSix==6(it does) then it will displayu another set of Text from the same stringList
  but it will rotate the text as well*/
function drawSix(){
  if (stateSix==6){
    push();
    translate(100,100);
    rotate( radians(frameCount) ); 
    text(displayString, 50,10);
    pop();
  }
}
