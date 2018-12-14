var boxWidth = 600;
var bugWidth = 25;
var $bug = document.querySelector('#bug');
var $point = document.querySelector('#score');
var $box = document.querySelector('#box');
var point = 0;
var bugSpeed = 3000;
var timer = 0;

function addPoint() {
    point++;
    $point.innerHTML = point;
    dieBug();
}

function dieBug() {
    start();
    // move();
}

function move() {
    $bug.style.display = 'none';
    var x = random(boxWidth - bugWidth);
    var y = random(boxWidth - bugWidth);
    console.log(x, y);

    bug.style.left = x + "px";
    bug.style.top = y + "px";
}

function random(max) {
    return Math.floor(Math.random() * max);
}

function start() {
    clearInterval(timer);
    timer = setInterval(move, bugSpeed);
}

function minusLife() {
    
}

start();
bug.addEventListener('click', addPoint);
bug.addEventListener('click', minusLife);
