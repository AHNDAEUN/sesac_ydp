const express= require('express');
const app = express();
const PORT= 3000;


app.set('view engine','ejs')

    
app.set('views','./views')/




app.get('/', (req,res)=>{ 
    
    res.render('index')

})

app.listen(PORT, ()=>{

    console.log('실행중');

})