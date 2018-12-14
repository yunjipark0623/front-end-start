// server.js
// var http = require('http');//http라는 모듈을 불러온다. 

// http.createServer(function (req, res) {//callback함수 ㅜㅐ
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:1337/');

// fs 모듈 사용 
// node fs.js
// var fs = require('fs');

// fs.writeFile('message.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });

// isTrue = fs.write(filename, contents);

var prettyBytes = require('pretty-bytes');

console.log(prettyBytes(100));
// console.log(prettyBytes(1337)