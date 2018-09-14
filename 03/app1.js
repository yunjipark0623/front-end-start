function test() {
    console.log("test()");
}

var id = setTimeout(test, 1000);//1초 후 1번 실행
var id = setInterval(test, 1000);//멈추기 전까지 1초마다 계속 실행