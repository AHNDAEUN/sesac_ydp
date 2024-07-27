// 등록
const express= require('express'); 
const app = express();  
const PORT = 8888; 

app.set('view engine','ejs')
app.set('views','./views')


app.get('/',(req,res)=>{
    res.render('rkfk')
})

app.post('/',(req,res)=>{
    res.render('로그인 Post')
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})