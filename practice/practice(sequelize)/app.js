const express= require('express');
const { sequelize } = require('../../sequelize/models');

const router = require('./routes')

const express = require ('express') 
const app = express();
const router = require('./routes')

const PORT = 8080;


const {sequelize}= require('./models')


app.use(express.urlencoded({extended: true}))
app.use(express.json())


 app.use('/', router)



 sequelize
.sync({force: false})
.then(()=>{
    app.listen(PORT,()=>{
        console.log('Database connection succeeded');
        console.log(`Server is runnint! prot number is ${PORT}`);
    });

})

.catch((err) => {
    console.error(err);
});