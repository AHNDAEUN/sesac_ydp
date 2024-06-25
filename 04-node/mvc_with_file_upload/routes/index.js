//라우터는 클라이언트가 서버로 요청할 수 있는 API 주소
//하나의 js 파일에서 여러개의 API 주소를 담는 라우터를 설정

const express =require('express')
const router = express.Router();
const controller =require('../controller/Cfile')
const getFileUpload= require('../middlewares/upload-middleware')

console.log('routes/index.js');
console.log(controller);


router.get('/',controller.getM);

router.post("/upload", getFileUpload.upload, controller.upload);


// multer객체.array(): 여러 파일을 하나의 인풋에 업로드
router.post("/upload/array",  getFileUpload.array,controller.array);


// multer객체.flelds(): 여러 파일을 각각의 인풋에 업로드
router.post("/upload/fields", getFileUpload.fields,controller.fields)

//동적 폼 업로드
router.post("/dynamicFile", getFileUpload.dynamic, controller.dynamicFile)






// 내보내기
module.exports=router;