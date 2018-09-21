var black = document.getElementsByClassName('b');
var white = document.getElementsByClassName('w');

var clickBlack = $(black).on('click', clickBox);
var clickWhite = $(white).on('click', clickBox);

function clickBox() {
    if (clickBlack) {
        $(clickBlack).css('background', 'red');
    }
    else if (clickWhite) {
        $(clickWhite).css('background', 'red');
    } 
}
