const express = require ('express')
const app =express(); 

const PORT= 9000;

app.set('view engine','ejs')/

    

//브라우저에 처음 접속 했을 때
app.set('views','./views')
app.get('/', (req,res)=>{ 

    res.render('index',{title:'홈'}) // 홈이라는 글자를 INDEX EJS에 보여지게 함

})


app.set('views','./views')
app.get('/about', (req,res)=>{ 

    res.render('about',{title:'소개'})

})


app.set('create','./views')
app.get('/create', (req,res)=>{ 

    res.render('create',{title:'작성'})

})



app.listen(PORT, ()=>{
    console.log('9000 서버 실행');
})
