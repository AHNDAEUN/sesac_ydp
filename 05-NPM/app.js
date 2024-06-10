

const http = require('http')
http.createServer(function(req,res){

    // 서버가 만들어지면 해

    //send http
    //http status(상태) 200은 정상적인 응답
    // content-Type : text/plain 
   // res.writeHead(200,{'Contest-Type':'text/plain'}) // 200번이라고 써줘
    res.writeHead(200, {'Content-Type':'text/html'}) // 어떻게 해석할 건지: html로 해석 해줘
    res.end(`<h2> Hello world</h2>`) //응답 주고 끝내


}).listen(8080, () => {
    console.log('8080포트에서 실행중')
});