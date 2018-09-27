
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

var tmpColor;
var tmpValue;
var divs = document.querySelectorAll('#wrap div');

function chColor(event) {

    //색 되돌리기 

    if (tmpValue != null) {
        $(tmpValue).css('backgroundColor', tmpColor);
    }

    //색 칠하기
    
    tmpValue = event.target;
    tmpColor = event.currentTarget.style.backgroundColor;
    event.currentTarget.style.backgroundColor = 'red';
}

for (var i = 0; i < divs.length; i++) {
    $(divs[i]).on('click', chColor);
}



