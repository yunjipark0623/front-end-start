var href = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10';

function callAjax() {
    $.ajax({
        url: href,
        success : function(result) {
            document.write(result);
        }
    });
}