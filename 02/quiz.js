for(num = 1; num <= 100; num++) {//1부터 100까지 출력
    console.log(num);
}

for(num = 1; num <=100; num++) {//짝수 출력
    if(num%2 == 0) {
        console.log(num);
    }
}

for(i = 1; i < 10; i++) {//구구단 출력
    for(j = 1; j < 10; j++) {
        console.log(i + "*" + j + "=" + i * j);
    }
}