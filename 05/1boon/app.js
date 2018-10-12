//API받아오는 방법
console.log('1boon');

var button = document.getElementById('button');
var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10';
var str = '';
var pgnumber = 2;

getUrlData(url, print);

function print(json) {//출력해주는거
  console.log(json);//object가 출력된다. 

  for (var i = 0; i < json.data.length; i++) {
    var title = json.data[i].title;
    var path = json.data[i].path;
    str += `<a href="http://1boon.kakao.com/${path}" target="_blank">${title}</a><br>`;  
  }
  document.getElementById('wrap').innerHTML = str;
}

function getUrlData(url, callback) {//정보 받아와서 패치 해주는 거
  fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        callback(data);
      });
    })
    .catch(function(err) {//에러났을 때 처리
      console.log('Fetch Error :-S', err);
    });
}

$(button).on('click', more);

function more() { 
    var url = 'https://1boon.kakao.com/ch/enter.json?page=' + pgnumber + '&pagesize=10';
    getUrlData(url, print);
    pgnumber++;
}
