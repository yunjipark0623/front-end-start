var num, sum = 0;

for(var isEnd = false; isEnd === false; ){

  num = prompt("더할 숫자를 입력하세요");

  if(num === null){//취소(끝내기)버튼을 누를 때, prompt()에 값이 없으면 결과 출력
    alert("합은 "+ sum +"입니다");
    isEnd = true;
    // break;
  }
  else {
    sum += parseInt(num, 10);//입력받은 값을 10진수 정수로 변환한다.
  }
}