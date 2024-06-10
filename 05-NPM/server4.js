const http =require('http');
const fs = require('fs');
const server= http.createServer((req,res)=>{

    let path="./views/";

    switch(req.url){
        
        case '/':
        path +='index.html' // ./views/index.html
        res.statusCode= 200;
        break;
          
        case '/about':
        path += 'about.html'
        res.statusCode= 200;
        break;

        default:
        res.statusCode= 404;
        break;
    }

    //--------경로 만들어짐

    fs.readFile(path, (err,data)=>{  //  path 경로 찾아가서 err 발생/발생하지 않으면

        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data)
        }
    })

});

server.listen(3000, ()=>{

    console.log('30000포트에서 실행')
})