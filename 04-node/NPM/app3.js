const http = require('http');
http.createServer(function(req, res){

    var _url = req.url;
    res.writeHead(200);
    res.write("<h2>Hello</h2>");
    res.end(`<p>${_url}</p>`);
}).listen(8000,()=>{

console.log('서버실행');
})

// const http = require('http')
// http.createServer(function(req, res) {
//     var _url = req.url;
//     res.writeHead(200,{'Content_Type:text.html'});
//     res.write("<h2>Hello</h2>");
//     res.end(`<p> ${_url} </p>`)
// }).listen(8000, ()=> {
//     console.log('서버실행');
// })