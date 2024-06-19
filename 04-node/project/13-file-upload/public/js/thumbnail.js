console.log("dfd");

function uploadThumbnail() {
    
    //FormData 객체를 활용해서 데이터 보내기
    // 폼 전송할때 멀티미디어 팔일을 비동기로 제출하고 싶다면? 
    // FormData 객체를 이용

    const formData= new FormData(); //객체 생성

    // 폼요소를 선택
    const fileInput =document.querySelector('#thumbnail')
    console.log(fileInput);
    console.log(fileInput.files);

    //FormData에 추가

    formData.append('thumbnail',fileInput.files[0])
    // consol.lof(formData)// FormData는 특수한 형태의 객체이기 때문에 쉽게 출력x

    // 서버로 요청보내기

    axios({
        method: 'POST',
        url:'/dynamicFile',
        data: formData,
        //key
        headers:{
            'Content-Type':'multipart/form-data', //enctype="multiaprt/form-data"
        }
    }).then(function(res){
        //서버의 req.file을 클라이언트의 res 변수가 받음
        
        console.log(res);
        console.log(res.data.pqth); // 이미지의 주소


        //img 태그의 속성값에 이미지 주소 부여
        document.querySelector('img').src=`/${res.data.path}`

        //img 태그에 thumbnail 클래스명 부여
        document.querySelector('img').classList.add('thumbnail')
    })
}