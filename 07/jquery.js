// document.querySelector('h1').innerHTML = 'hi';
// $('h1').html('hi');//위에랑 똑같은 말이다. 위에꺼는 jquery를 사용하기 전에 우리가 사용하던 방법
// $('h1').fadeOut().delay(1000).fadeIn();//fadeout시키고 1초간 기다렸다가 다시 fadein시켜라

// ----------------------------------------------------------------------------------- //

// var divs = document.querySelectorAll('div');
// for(var i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = 'red';
// }//이렇게 길게 적어줬던 것을

// $('div').css("background-color", 'red');//jquery로 간단하게 한 줄로 끝낼 수 있다.

// $('div')
//     .css('background-color', 'yellow')
//     .css('border-color', 'red');//여러가지 속성을 한번에 적용해 줄 수도 있다.

// var $div = $('div');//라고 변수 선언해주고
// $($div)
//     .css('background-color', 'yellow')
//     .css('border', '1px solid red');//이렇게 해줘도 된다.


// ----------------------------------------------------------------------------------- //

var $btn = $('#btn');
var $txt = $('#txt');
var $debug = $('#debug');

$btn.on('click', function(event) {
    console.log('click')
    $('h1').toggle('fast');//이런 animation기능들은 google에 js animation이라고 치면 많이 나온다.

    // if($txt.val() === '') {//jquery에서 value메소드를 쓰면 값을 갖고 온다.
    //     alert('검색어를 입력해 주세요.')
    //     return;
    // }
    // $debug.html($txt.val());
});

$('.wrap').on('click', 'div', function(event) {//두 번째 파라미터에 이벤트를 적는게 아니고 받을 걸 적어준다.
    $(event.target).fadeOut();
    // console.log(event.target);
});//div하나하나 마다 이벤트 주는 것 보다 그 어미의 div에 이벤트 주는게 낫다.




