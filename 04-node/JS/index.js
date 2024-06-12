//구조분해 할당

// const arr1 =[1,2,3,4,5]
// const arr2 =['a','b','c']

// const[one,two,abc,four,five]=arr1
// console.log(one,two,abc,four,five);


// const[x,y,z, alpha] =arr2
// console.log(x,y,z, alpha);


// let num =1
// let num2=2

// // 변수값의 교환 
// // 2개의 변수값을 교환할 때 제 3의 변수 사용, 지금 x

// console.log('before:', num,num2);
// [num2,num]=[num,num2]

// console.log('after:',num,num2);


//
// const lists= ['apple','banana'];
// [f1,f2,f3='orange']=lists; // 값이 안들어오면 오렌지로 지정해줘

// console.log(
//     f1,f2,f3
// );



// 객체, object : key와 value로 이루어진 것 
//                  -객체에 값을 줄 땐 {} 사용

// const obj = {
//     title : '엘리먼트',
//     content: "fun",
//     num: 5
// }

// // . 표기법 (키의 속성 가져오기)
// console.log(obj.title);//엘리먼트
// console.log(obj.content); //fun
// console.log(obj.num); //5


// // 전체 내용 노출 
// console.log(obj['title']); //엘리먼트 fun 5 엘리먼트 fun 5
// console.log(obj['content']);
// console.log(obj['num']);

// 객체 구조 분해

// const{num, title, content} = obj;
// console.log(num,title,content); //5 엘리먼트 fun

//-------------------------------------------
// 객체 구조 분해 , 디폴트값을 줄수도 있음
// const{num, title, content,star=100} = obj;
//  console.log(num,title,content,star); //5 엘리먼트 fun 100


//  const{a1,b1,c1} = obj; // 같은 이름을 사용해야 함
//  console.log(a1,b1,c1); //undefined undefined undefined


 //undefined : 변수는 할당되었지만(초기화), 값이 할당x
 //let a= 20

 const lectureInfo={
    name: 'Coding on',
    part:'web',
    leader:'AHN', 
    // ,: 뒤에 값이 들어갈 수 있다는 표시, 에러 나지 않음
 }

 // console.log(lectureInfo); //{ name: 'Coding on', part: 'web', leader: 'AHN' }




 function getInfo(lecture) {//lectureInfo를 매개변수로 넣으면 객체의 전체 값이 들어감 
 
 
    const{name,part,leader} =lecture // 분해해서 lecture에 넣음
    const output = `${name}강의는 ${part} 개발을 공부합니다 수업의 리더는 ${leader} 입니다.`

    return output;
}


const result= getInfo(lectureInfo);  //Coding on강의는 web 개발을 공부합니다 수업의 리더는 AHN 입니다.
console.log(result);