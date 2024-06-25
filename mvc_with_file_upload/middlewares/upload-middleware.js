// multer 내보내기 
const multer = require('multer'); 
const path = require('path');


 const uploadDetail = multer({
    storage: multer.diskStorage({

        
        destination(req, file, done) {
            done(null, 'uploads/'); // 파일을 저장할 경로
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 업로드 크기 제한


})

 exports.upload= uploadDetail.single('userfile');

// multer객체.array(): 여러 파일을 하나의 인풋에 업로드
 exports.array= uploadDetail.array('banana');

// multer객체.flelds(): 여러 파일을 각각의 인풋에 업로드
 exports.fields=uploadDetail.fields([{name:'kiwi'},{name:'orange'}])

 exports.dynamic=uploadDetail.single('thumbnail');
