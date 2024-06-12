
// url 모듈은 웹주소를 읽어온다 읽어온 내용을 구분분석하여 
//주소의 각 부분으로 나누고 객체로 변환함


// //var addr ="http://localhost:8000/example.htm?year=2024&month=feb";
// var addr ="http://localhost:8000/example.htm?id=2024&pw=feb";
 

// var q= url.parse(addr,true)

// console.log(q);
// console.log(q.pathname); // 경로와 파일 이름 //example.htm
// console.log(q.search);//?year=2024&month=feb

// var qdata = q.query; 

// console.log(qdata); // {yearL '2024', month:'feb'}
// console.log(qdata.month); // 기존 쿼리에서 month에 해당하는 것만 출력 feb


//* 드레그한 블럭 + 방향 키+alt => 잡은 블럭 전체가 움직임


const http = require ('http');
const url = require ('url');
const fs = require ('fs');


http.createServer(function(req,res){

     var q= url.parse(req.url,true);
     var filename="."+q.pathname;

    fs.readFile(filename, function(err,data){

        if(err){

            res.writeHead(404,{'Content-Type':'text.html'});
            
            return res.end('404 Not found')
        }

        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        return res.end();
        })

    


}).listen(8000,()=>{
    console.log('8000 서버 실행')
})