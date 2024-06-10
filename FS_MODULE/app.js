const fs = require('fs'); // 파일 관리자
console.log(fs); 


//fs.mkdir(path 경로, mode 모드, callback 콜백) // 디렉토리 만듬

const path = require ('path')

// fs.mkdir(path.join(__dirname,"test"),(err)=>{
//  // 현재 디렉토리 안에, test 폴더 만들기
// if(err) {

//     return console.error(err)
// } 

//     console.log('디렉토리 생성완료');

// })

fs.rmdir(path.join(__dirname,"test"),(err)=>{
 // 현재 디렉토리 안에, test 폴더 만들기
if(err) {

    return console.error(err)
} 

    console.log('디렉토리 삭제완료');

})