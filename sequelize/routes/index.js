const express= require('express')
const router =express.Router();
//controller 연결
const controller=require('../controller/Cmain')


//기본 경로 : localhost:PORT

router.get('/',controller.index)


module.exports=router;