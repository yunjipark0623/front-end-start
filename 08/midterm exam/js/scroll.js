var $window = $(window);
var $top = $('#btn_top');

function checkScroll(event) {
    var scrollTop = $window.scrollTop();
}

function goTop() {
    $('html, body').animate({scrollTop : 0}, 400);
}

$window.on('scroll', checkScroll);
$top.click(goTop);