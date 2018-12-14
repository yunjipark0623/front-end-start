// var board = document.getElementById('board');
// var score = document.getElementById('score');
// var level = document.getElementById('level');
// var miss = document.getElementById('miss');
// var box = document.getElementById('box');
// var bug = document.getElementById('bug');

// bug.click(move);

// function move() {
//     var boxWidth = box.clientWidth;
//     var boxHeight = box.clientHeight;
//     var randX = Math.floor((Math.random()*boxWidth));
//     var randY = Math.floor((Math.random()*boxHeight));

//     bug.css('left', randX);
//     bug.css('top', randY);
// }

// setInterval(move, 1000);


var boxWidth = 600;
var bugWidth = 25;
var bug = document.querySelector('#bug');
var score = document.getElementById('score');
var level = document.getElementById('level');
var miss = document.getElementById('miss');

function move() {
    var x = random(boxWidth - bugWidth);
    var y = random(boxWidth - bugWidth);
    console.log(x, y);

    bug.style.left = x + "px";
    bug.style.top = y + "px";
}

function random(max) {
    return Math.floor(Math.random() * max);
}

setInterval(move, 2000);

// bug.addEventListener()

$(bug).on('click', upScore);

var numScore = 0;
var numLevel = 1;
var numMiss = 0;
var click = false;

score.innerHTML = numScore;
level.innerHTML = numLevel;
miss.innerHTML = numMiss;

function upScore() {
    click = true;
    numScore++;
    score.innerHTML = numScore;
}
 
if(click == false) {
    numMiss++;
    miss.innerHTML = numMiss;
}