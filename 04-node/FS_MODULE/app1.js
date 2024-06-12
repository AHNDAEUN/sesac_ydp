// 디렉토리 읽기

// // 파일 관리자
 const fs = require('fs');

// fs.readdir('./' ,function(err, files){


//     if(err) console.log("에러",err)
//         else console.log("결과는",files);
// });

//결과는 [ 'app.js', 'app1.js', 'demo', 'index.js' ]


// 파일 생성 // 내용 있는 파일 만들기
// fs.writeFile(파일 이름으로, 내용을, )  

fs.writeFile("mynewfile3.txt","helloworld",function(err){

    if (err)throw err;
    console.log("파일이 생성됨");
})    


// open(),w를 이용해서 파일 생성 // 내용 없는 파일 만들기
// 
fs.open ('mynewfie2.txt','w', function(err){

    if(err) throw err;
    console.log("파일 생성");
 })


 // 파일 생성 appendFile() 추가, 기존 있는 파일을 전제로 함

 fs.appendFile('mynewfie2.txt',"Ahn",function(err){
    if(err) throw err;

    console.log("내용 추가")
 })                                                                             