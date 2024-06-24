// 등록
const express= require('express'); 
const app = express();  
const PORT = 8888; 

app.set('view engine','ejs')
app.set('views','./views')




app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req , res)=>{
    res.render('index1',{title: '폼 실습하기'})
})


// app.get('/getForm', (req, res) => {
//     console.log(req.query); 
//     console.log(req.boby);
//     res.render('result', {title: '실습 정보', userInfo: req.query})
// })

app.post('/postForm',(req, res) => {

    console.log(req.body);
    res.render('result1', {title: '실습 정보', userInfo1: req.body})

})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})