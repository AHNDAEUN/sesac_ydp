
//   path.join(): 여러인자(매개변수)를 넣으면 하나의 경로로 합쳐줌
//   path.resolve(): path.join()비슷하지만 약간의 차이
//   path.parse(): 파일 경로를 root, dir, base, ext, name구분
//   path.format(): path.parse()한 객체를 파일 경로로 합친다
 

// const path= require('path');

// console.log(abc);
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));
//  console.log(__dirname);
//  console.log(__filename);

//  console.log(path.join('a','b','index.html')); 


//  console.log("----------------------------");
 
 
//  let pathname= path.parse('/home/user/dir/file.txt')
//  console.log(pathname);

//  //parse: 구문 분석(분해) 역할

//  console.log("----------------------------");

// console.log( path.extname('/home/user/dir/file.txt')); // 확장자 이름
// console.log( path.basename('/home/user/dir/file.txt')); // 파일 이름



//path 내장 모듈
// path 내장 모듈
const path = require('path');

const ext = path.extname('hello.txt'); // extname: 확장자를 추출해주는 메서드
const base = path.basename('hello.txt', ext); // basename: 파일명에서 확장자를 제외한 파일 이름만 추출
const result = base + Date.now() + ext; // 파일명 + 현재시각 + 확장자

console.log(ext); // .txt
console.log(base); // hello
console.log(result); // hello1718771926535.txt