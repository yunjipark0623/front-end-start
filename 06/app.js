console.log('app');

var appkey = '8ca147aabab3aac64e94064a0101977d';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;//작은 따옴표 대신 숫자 1옆에 있는거

var myHeaders = new Headers();
myHeaders.append("Authorization", "KakaoAK 8ca147aabab3aac64e94064a0101977d");
var options = {
    headers: myHeaders
};//header를 넘긴거

fetch(url, options)
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })