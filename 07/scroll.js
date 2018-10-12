var $window = $(window);
var $up = $('#up');

function checkScroll(event) {
    var scrollTop = $window.scrollTop();
    var 업버튼이_보여질_포지션 = 800;

    if (scrollTop > 업버튼이_보여질_포지션) {
        $up.fadeIn();
    }
}

function goTop() {
    // $window.scrollTop(0);
    $('html, body').animate({scrollTop : 0}, 400);
}

$window.on('scroll', checkScroll);//함수로 다 빼주기
$up.click(goTop);