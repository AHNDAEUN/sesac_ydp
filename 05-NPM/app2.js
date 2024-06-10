const http = require('http')

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(`<h2> ade </h2>`)

}).listen(3000,()=>{

    console.log("3000포트 실행중")
});


