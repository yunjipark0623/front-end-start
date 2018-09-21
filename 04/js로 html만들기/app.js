
//체스판 만들기

var wrap = document.querySelector('.wrap');
var str = '';
var black = '<div class="b"></div>';
var white = '<div class="w"></div>';

for (var i = 0; i < 4; i++) {
    if (i % 2 == 1) {
        str += black + white + black + white;
    }
    else {
        str += white + black + white + black;
    }
}

wrap.innerHTML = str;

//클릭했을 때 색깔 빨간색으로 변하기

// var blocks = document.querySelectorAll('.wrap > div');
// blocks.forEach(function(block) {
    
//     blocks.addEventListener('click', function(event) {
//         Console.log(block);
//         blocks.style.backgroundColor = 'yellow';
//     })
// })

// var clickBlack = event.currentTarget;
// var clickWhite = white.event.currentTarget;

// $(clickBlack).on('click', clickBox);
// $(clickWhite).on('click', clockBox);

// function clickBox(clickBlack) {
    // if (clickBlack) {
    //     $(clickBlack).css('background', 'red');
    // }
    // else if (clickWhite) {
    //     $(clickWhite).css('background', 'red');
    // } 
    // $(clickBlack).css('background', 'red');
    // $(clickWhite).css('background', 'red');
// }