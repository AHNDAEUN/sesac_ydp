const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, "demo"),(error)=>{

    if(err){

        return console.error(err);
    }
    console.log("생성 완료");

})