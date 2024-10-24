var boxsize = 25;
var cols = 20;
var lignes = 20;
var context;
var plateau;

var fruitX = 10 * boxsize;
var fruitY = 10 * boxsize;

var serpentX = 5 * boxsize;
var serpentY = 5 * boxsize;

window.onload = function() {
    plateau = document.getElementById("board");
    plateau.height = lignes * boxsize;
    plateau.width = cols * boxsize;
    context = plateau.getContext("2d");

    update();
}

function update() {

    context.fillStyle="black";
    context.fillRect(0, 0, plateau.width, plateau.height);

    context.fillStyle="red";
    context.fillRect(fruitX, fruitY, boxsize, boxsize);

    context.fillStyle="lime";
    context.fillRect(serpentX, serpentY, boxsize, boxsize);
}