const express= require('express')
const router =express.Router();
const cotroller= require('../controller/Cmain')
// const {getMain,getComments,getComment}= require('../controller/Cmain')

console.log('routes/index.js');
console.log(cotroller);


router.get('/',cotroller.getMain)



router.get('/comments', cotroller.getComments);


//콜론(:): 요청의 주소에서 변수를 사용하는 방법

router.get('/comment/:id',cotroller.getComment )


//내보내기

module.exports=router;
