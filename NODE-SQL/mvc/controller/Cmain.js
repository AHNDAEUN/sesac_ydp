
const { getDbComments } = require('../model/Comment');


  //함수를 정의함과 동시에 내보내기
  exports.getMain = (req , res)=>{
    res.render('index',{title: 'mvc 실습하기'})
}

exports.getComments =(req, res) => {
    res.render('comments', { comments: getDbComments() }); // { comments: comments } // 응답으로 comments라는 이름을 넘겨줌
}


exports.getComment=(req, res) => {
    console.log(req.params); // { id: '1' }
    console.log(req.params.id) // '1'

    // 댓글 id: 요청 주소로 들어온 매개변수 (:id)
    const commentId = req.params.id; 
    const dbComments= getDbComments(); // []
    console.log(dbComments[commentId])

        // 존재하지 않는 id에 대해서 요청할 때 404 처리
    if(!dbComments[commentId-1]){ // !undefined=> true
        return res.render('404')
    }

    res.render('comment', { comment: dbComments[commentId - 1] });
}



