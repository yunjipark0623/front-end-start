
//체스판 만들기

var wrap = document.getElementById('wrap');
var str = '';
var black = '<div class="black"></div><div class="white"></div>';
var white = '<div class="white"></div><div class="black"></div>';

for (var i = 1; i <= 4; i++) {
    if (i % 2 == 1) {
        str += black + black;
    }
    else if (i % 2 == 0) {
        str += white + white;
    }
}

wrap.innerHTML = str;

var clickColor;
var clickValue;
var divs = document.querySelectorAll('#wrap div');

function chColor(event) {

    //색 되돌리기 

    if (clickValue != null) {
        $(clickValue).css('backgroundColor', clickColor);
    }

    //색 칠하기

    clickValue = event.target;
    clickColor = event.currentTarget.style.backgroundColor;
    event.currentTarget.style.backgroundColor = 'red';
}

for (var i = 0; i < divs.length; i++) {
    $(divs[i]).on('click', chColor);
}



