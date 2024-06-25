//이제 컨트롤러에서 모델에 접근할 수 있도록
//데이터베이스를 접근할 수 있는 코드를 작성


// 함수를 정의함과 동시에 내보내기 

exports.upload= (req, res) => {
    console.log(req.body); // { title: '바탕화면 사진임' }
    console.log(req.file); // 업로드된 파일 정보
  
     res.render('result',{title:req.body.title, src: req.file.path})

};


// multer객체.array(): 여러 파일을 하나의 인풋에 업로드
exports.array= (req, res) => {
  console.log(req.body);
  console.log(req.files);

  res.send("multiple-- Success Upload!!")
};


// multer객체.flelds(): 여러 파일을 각각의 인풋에 업로드
exports.fields= (req, res) => {
    console.log(req.body); //{ title1: 'ㅇㅇ', title2: '사진 2개' }
    console.log(req.files);//  { kiwi:[{}..] orange:[{}...]}

    res.send("multiple(2)")
}

//동적 폼 업로드
exports.dynamicFile=(req, res) => {
    console.log(req.file)
    res.send(req.file);
}


exports.getM= (req, res)=> {
    res.render('index');
};