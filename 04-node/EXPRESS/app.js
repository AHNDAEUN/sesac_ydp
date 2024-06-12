const express = require ('express') // 불러오기
const app =express(); // 모든 기능을 app 집어넣기
// console.log(app);
const PORT= 8000;

app.set('view engine','ejs')// set을 이용해서 뷰 엔진을 ejs를 사용하겠다
    //view emgine은 반복적인 화면을 단순하게 for문 등 반복문 함수를 통해 
    // 사용할 수 있게 해주는 엔진임 그 뷰 엔진에 들어있는 ejs를 가져오는 것 

    
app.set('views','./views')// 화면에 보여지는 것들을 모두 views 안에 ,views파일을 가져와 / views 폴더 안에 파일.ejs 
// ejs 폴더가 어디에서 위치할거냐면 현재위치에서 view에 담겨 있어!
// app.get('/',function(req, res){// 이경로 들어오면 함수에 들어오는 매개변수 실행

//     res.send('express')  // 루트 로 들어오면 exprss를 보내줘 


// }) 

app.get('/', (req,res)=>{ // req에 감지가 되면 
    //res
    res.render('index')

})


// express로 서버 만들기 
app.listen(PORT, ()=>{//server를 안쓰는 이유는 epress에 server가 담겨 있기 떄문에 app(express를 담은)변수에 listen만 줌

    console.log('8000 서버 실행');
})



/**
 * * 1. app.get(path, callback): HTTP GET 요청에 대한 라우터를 등록
 * 2. app.post(path, callback): HTTP POST 요청에 대한 라우터를 등록
 * 3. app.use([path,] callback [, callback...]): 미들웨어 함수를 등록
 * 4. app.set(name, value): Express 애플리케이션의 설정 값을 지정 일반적으로, view engine과 views 설정을 지정하는 데 사용
 * 5. app.listen(port, [host], [backlog], [callback]): HTTP 서버를 시작 이 메서드는 포트 번호, 호스트 이름, 백로그 크기, 콜백 함수를 전달
 * 6. res.send([body]): HTTP 응답으로 데이터를 전송 이 메서드는 문자열, 버퍼, 객체, 배열 등 다양한 유형의 데이터를 전송할 수 있음
 * 7. res.redirect([status,] path): HTTP 리다이렉트를 수행 이 메서드는 경로와 상태 코드를 전달
 * 8. req.params: 라우트 매개변수를 가져옴. 이 메서드는 콜론(:)으로 시작되는 동적 라우트 매개변수를 포함하는 객체를 반환함
 * 9. req.query: URL 쿼리 매개변수를 가져옴 이 메서드는 URL의 ? 뒤에 나오는 쿼리 문자열을 객체로 반환
 * 10. res.render(view [, locals] [, callback]): 뷰 템플릿을 렌더링 이 메서드는 뷰 이름과 뷰에 전달될 데이터를 전달
 * 

 */

