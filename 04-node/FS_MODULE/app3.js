// 파일 생성 
// const fs = require('fs')

// fs.readFile('./input.txt','utf-8', function(err,data){


//         if(err) throw err;
//         console.log(data);
// })


// console.log("파일 읽기 완료")

//-------------------------------------------------------------

//const fs = require('fs')

// fs.readFile('./input.txt','utf-8', function(err,data){


//         if(err) throw err;
//         console.log(data);
// })
//console.log("파일 읽기 완료")

//---------------------------------------------------------------
// fs.readFile('./input.txt', function(err,data){
    
//     console.log(data);
// })

//console.log("파일 읽기 완료")

//1 , 2, 3

// <Buffer 61 0d 0a 62 0d 0a 63 0d 0a 64 0d 0a 65>
//Buffer : 끊어주기
//-------------------------------------------------------
const fs = require('fs')
const data = fs.readFileSync('./input.txt','utf-8')
console.log(data);
console.log("파일 읽기 완료")
