// document.getElementById('debug')//element를 갖고 오는데 id로 갖고 오는 것, html에 id태그가 있어서 갖고 올수 있음

// console.log(dom);

// var dom2 = document.querySelectorAll('#debug');

// console.log(dom2);

var div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "<h3>dddddd</h3>";//DOM(객체)로 들어간다
document.body.appendChild(div);//위에서 만든 div를 넣는 것이다
//appendChild가 DOM에 접근하는 표준적인 방식이지만 innerHTML을 더 많이 사용한다.
