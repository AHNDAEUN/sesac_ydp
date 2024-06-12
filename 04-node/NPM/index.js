// const http =require('http');
// //onsole.log(http);

// // node= 실행환경!! 
// // http : node가 기본적으로 가지고 있는 모듈이라 따로 다운로드 받지 않아도 됨

// ///http 모듈(=함수)이 가지고 있는 서버 만드는 기능을 사용해 보자 
// const server= http.createServer();
// //http속에 있는 createServer를 실행

// server.listen(8000,function(){  포트 신호 감지

//     console.log('8000포트에서 서버 실행 중');
// })

const http= require('http')
const server = http.createServer();

server.listen(8000.,function(){

    console.log('ade')
})



