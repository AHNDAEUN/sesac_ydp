const express = require('express');
const app = express();
const PORT = 8080;
const multer = require('multer'); 
const path = require('path');



app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/public'));


const indexRouter= require('./routes/index');
app.use('/',indexRouter) 


app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
})
  