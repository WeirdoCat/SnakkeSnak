//Make a small drawing program with p5 speech 
//reference: http://ability.nyu.edu/p5.js-speech/

let myRec, browserCompatible, pen, direction, displayWord, dab, timeSquare, squareAnimation;
let houseAnimation, timeHouse;

function setup() {
    timeSquare = 1;
    timeHouse = 1;
    cnv = createCanvas(400, 400);
    background('red');
    //Check browser compatibility
    browserCompatible = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;
    //If compatible browser - instantiate 
    if (browserCompatible !== undefined) {
        myRec = new p5.SpeechRec();
        myRec.continuous = true;
        myRec.interimResults = true;
        myRec.onResult = showResult;
        myRec.start();
    }
    displayWord = createDiv();

    pen = {
        x: width / 2,
        y: height / 2,
        size: 20,
        col: color(random(255), random(255), random(255), 150),
        show: function () {
            fill(this.col);
            ellipseMode(CENTER);
            ellipse(this.x, this.y, this.size, this.size);

        },
        bounce: function () {
            if (this.x <= 0){
                this.x = 0
            }
            if (this.x >= width){
                this.x = width
            }
            if (this.y <= 0){
                this.y = 0
            }
            if (this.y >= height){
                this.y = height
            }
        }
    }
    console.log("pen findes og dens x værdi er: " + pen.x);
}

function draw() {
    square();
    house();
    if (direction == "left") pen.x -= 1
    if (direction == "up") pen.y -= 1
    if (direction == "right") pen.x += 1
    if (direction == "down") pen.y += 1
    if (direction == "ur") {
        pen.x += 1
        pen.y -= 1
    }
    if (direction == "dr") {
        pen.x += 1
        pen.y += 1
    }
    if (dab == "bigger") pen.size += 1
    if (dab == "small") pen.size -= 1

    pen.show();
    pen.bounce();
}

function showResult() {
    if (myRec.resultValue == true) {
        word = myRec.resultString.split(' ').pop();
        displayWord.html(word.toLowerCase());
        switch (word.toLowerCase()) {
            case "left":
            case "lift":
                direction = "left"
                break;
            case "right":
                direction = "right"
                break;
                case "square":
               squareAnimation = true
                break;

                case "house":
               houseAnimation = true
                break;

            case "up":
                direction = "up"
                break;
            case "down":
                direction = "down"
                break;
                case"bigger":
                dab = "bigger"
                break;
                case "downer":
                case "smaller":
                case "small":
                dab = "small"
                break;
            default:
            direction = "stop"
            dab = "stop"
               
        }
    }
}

function square(){
  
  if(squareAnimation == true){  
      if(timeSquare<60*3*6)timeSquare++

  if(timeSquare <= 60*3)  direction = "left";
  else if (timeSquare < 60*3*2) direction = "up";
  else if (timeSquare < 60*3*3) direction = "right";
  else if (timeSquare < 60*3*4) direction = "down";
  else if (timeSquare < 60*3*5) direction = "left";
  else{ direction = "stop";
  squareAnimation = false;
  timeSquare = 1;

}
}
}
function house(){
  
    if(houseAnimation == true){  
        if(timeHouse<60*3*6)timeHouse++
  
    if(timeHouse <= 60*2)  direction = "left";
    else if (timeHouse < 60*4) direction = "up";
    else if (timeHouse < 60*5) direction = "ur";
    else if (timeHouse < 60*6) direction = "dr";
    else if (timeHouse < 60*8) direction = "down";
    else{ direction = "stop";
  houseAnimation = false;
  houseSquare = 1;

}
  }
  }