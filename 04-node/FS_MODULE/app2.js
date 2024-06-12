//파일 삭제

const { clear } = require('console');
const fs = require ('fs');

// fs.unlink('mynewfie2.txt',function(){

//     console.log("파일 삭제 완료");

// })


//파일 이름 변경
// 어떤 파일을 무슨 이름으로?
fs.rename('mynewfile.txt','renamefile1.txt', function(err){

    if(err) throw err;
    console.log('파일 이름 변경 완료')
})