var boxsize = 25;
var cols = 20;
var lignes = 20;
var context;
var plateau;

var fruitX;
var fruitY;

var serpentX = 5 * boxsize;
var serpentY = 5 * boxsize;

var dx = 0;
var dy = 0;

var score = 0;

var body = [];

window.onload = function() {
    plateau = document.getElementById("board");
    plateau.height = lignes * boxsize;
    plateau.width = cols * boxsize;
    context = plateau.getContext("2d")

    generatefruit();
    document.addEventListener("keyup", deplacement)
    setInterval(update, 200);
}

function update() {
    serpentX += dx;
    serpentY += dy;

   
    context.fillStyle="black";
    context.fillRect(0, 0, plateau.width, plateau.height);

    context.fillStyle="red";
    context.fillRect(fruitX, fruitY, boxsize, boxsize);

    if(serpentX == fruitX && serpentY == fruitY){
        gestionscore();
        context.clearRect(fruitX,fruitY,boxsize,boxsize);
        body.push(fruitX,fruitY);
        generatefruit();
    }

    for (let i = body.length-1; i > 0; i--) {
        body[i] = body[i-1];
    }

    if (body.length) {
        body[0] = [serpentX, serpentY];
    }

    context.fillStyle="lime";
    context.fillRect(serpentX, serpentY, boxsize, boxsize);
    for(let i = 0; i < body.length; i++) {
        context.fillRect(body[i][0], body[i][1], boxsize, boxsize);
    }

    
}

function generatefruit(){
    fruitX = Math.floor(Math.random() * lignes) * boxsize;
    fruitY = Math.floor(Math.random() * cols) * boxsize;
}

function deplacement(e){
    if(e.code === "ArrowUp" && dy == 0){
        dx = 0;
        dy = -boxsize;
    }
    if(e.code == "ArrowDown" && dy == 0){
        dx = 0;
        dy = boxsize;
    }
    if(e.code == "ArrowLeft" && dx == 0){
        dx = -boxsize;
        dy = 0;
    }
    if(e.code == "ArrowRight" && dx == 0){
        dx = boxsize;
        dy = 0;
    }
}

function gestionscore(){
    score++;
    document.getElementById("score").textContent = score;
}

