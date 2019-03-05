let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt;
let img,  imageHolder;
//let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14,img15,

function setup() {

 








    //woohoo der er sket noget
    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;

    cnv = createCanvas(1000, 1000);
    background('red');
    txt = createElement("h5", "Say something, please")
        .position(40, 200)
        .style("color:white;")
        .hide();

    resultP = createP("")
        .position(40, 220)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        btn = createButton("Klik for at aktivere mikrofon")
            .position(40, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {

}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString;
        resultP.html(sentence);

       /* img1 = loadImage("img/amazeBalls.png");
        img2 = loadImage("img/back.png");
        img3 = loadImage("img/cap.png");
        img4 = loadImage("img/convay.png");
        img5 = loadImage("img/cookie.png");
        img6 = loadImage("img/down.png");
        img7 = loadImage("img/end.png");
        img9 = loadImage("img/exponentiel.png");
        img10 = loadImage("img/moba.png");
        img11 = loadImage("img/stone.png");
        img12 = loadImage("img/try.png");
        img13 = loadImage("img/up.png");
        img14 = loadImage("img/woohoo.png");
        img15 = loadImage("img/xt.png");
*/
        if (sentence.includes("amazeballs")) {
            //image(img1, 0, height / 2, img1.width / 2, img1.height / 2)
            switchImage("img/amazeBalls.png");
        };
        if (sentence.includes("graphs")) {
           // image(img3, 0, height / 2, img1.width / 2, img1.height / 2)
            switchImage("img/cap.png");
        };
        if (sentence.includes("up")) {
            //image(img13, 0, height / 2,  img1.width / 2, img1.height / 2)
            switchImage("img/up.png");
        };
        if (sentence.includes("exponential")) {
            //image(img9, 0, height / 2,  img1.width / 2, img1.height / 2)
            switchImage("img/exponentiel.png");
        };
        if (sentence.includes("not")) {
           // image(img8, 0, height / 2,  img1.width / 2, img1.height / 2)
            switchImage("img/error.png");
        };
        if (sentence.includes("try")) {
           // image(img12, 0, height / 2,  img1.width / 2, img1.height / 2)
            switchImage("img/try.png");
        };
        if (sentence.includes("convey")) {
           // image(img4, 0, height / 2,  img1.width / 2, img1.height / 2)
            switchImage("img/convay.png");
        };
        if (sentence.includes("end")) {
            switchImage("img/end.png");
            //image(img7, 0, height / 2,  img1.width / 2, img1.height / 2)
        };
        if (sentence.includes("play")) {
            //image(img11, 0, height / 2,  img1.width / 2, img1.height / 2)
            switchImage("img/stone.png");
        };
        if (sentence.includes("game")) {
          //  image(img5, 0, height / 2, img1.width / 2, img1.height / 2)
            switchImage("img/cookie.png");
        }
        if (sentence.includes("uncontested")) {
            //image(img15, 0, height / 2,  img1.width / 2, img1.height / 2)
            switchImage("img/xt.png");
        };
        if (sentence.includes("maybe")) {
            //image(img10, 0, height / 2,  img1.width / 2, img1.height / 2)
        switchImage("img/moba.png");    
    };


    }
}

function switchImage(url){
    if(img == undefined){
        img = createImg(url)
        .position(width/2-200, height/2)
        .style("width:500px;height:500px");
    }else{
        img.attribute('src', url)
}}