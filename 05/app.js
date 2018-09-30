console.log('app.js');

function json() {
    var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=20'
    fetch(url)//이렇게 해서 json파일을 읽어옴
    .then(function(response){
        response.json().then(function(data){
            console.log('json data:', data);
            document.getElementById('name').innerHTML = data.name;//data 이름으로 들어온 데이터의 name을 innterHTML로 출력시켜준다.
        });
    })
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}
json();

function jsonp() {
    var head = document.querySelector("head");
    var script = document.createElement('script');
    script.src = 'jsonp.js';
    head.appendChild(script);//보통 head에 script를 넣는다.
}

function callback(data) {
    console.log(data);
    document.getElementById('name').innerHTML = data.name;
}

// jsonp();