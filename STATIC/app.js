// 설치 설정

const express = require ('express')
const app =express();
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static('public')) // 내가 express에 있는 static사용할 public 폴더를  등록한다 


//index 폴더 나오는지 확인

app.get("/",(req,res)=>{


    res.render('index',{title :"HOME"})

})


// 경로 등록

app.get("/about",(req,res)=>{


    res.render('about',{title :"ABOUT"})

})


app.get("/create",(req,res)=>{


    res.render('create',{title :"CREATE"})

})



//지정된 경로 외, 경로일 때

app.use((req,res)=>{


    res.status(404).render('404')
});




app.listen(2000,()=>{

    console.log('http://localthost:2000');
})