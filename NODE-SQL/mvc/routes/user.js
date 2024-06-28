const express= require('express')
const router =express.Router();
const cotroller= require('../controller/Cuser')



console.log('---------routes/user.js--------');
console.log(cotroller);



// 기본 요청 주소 : " localhost:PORT/user"

//GET localhost: PORT/user
router.get('/',cotroller.getUser)


//내보내기

module.exports=router;