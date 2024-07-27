const express = require('express')
const cookieParser= require('cookie-parser')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
     //dotenv로 환경 변수를 .env 파일로 관리하기
    path: path.resolve(__dirname,'.env')  //.resolve 절대경로 해석 
  
})

const app = express();
const port = process.env.PORT; 
 

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json());
app.use(express.cookieParser());

const cookieConfig = {
     
    httpOnly: true,
    maxAge: 60 * 1000,
    signed: true,
}

app.get('/',(req,res)=>{

    res.render('서버 실행')

});

app.post('/setCookie', (req, res)=>{
    
    
    res.cookie('myKeyTest','myValueTest',cookieConfig);

    // 클라이언트한테 응답
    res.send('set signed cookie');
})


app.listen(port, ()=>{
    console.log(`server${port}`);

})