// // 자료형 (data types)

// //Q 데이터 (변수)의 종류가 무엇인가?
// // - primitive(원시 타입): string, number, boolean, undefined, null...
// // - object(객체 타입): primitive 타입이 아닌 나머지
 
// //1. String (문자열) : 텍스트 정보 - 따옴표(""),('')로 감싸야 함
// //                   : 숫자 특수문자도 따옴표 안에 포함 되어 있으면 문자열로 인식


// let text= "안녕하세요";
// let text2 = "하이!";
// let gender = "여성2";

// console.log(text);
// console.log(text2);
// console.log(text+text2);

// //  + : 문자와 문자, 문자와 변수를 연결해주는 것
// // 문자 + 변수 를 동시에 쓰고 싶다면


// console.log(text+ "저는 ade 입니다. 저의 성별은" + gender+ '입니다.!'  );
// console.log(text,text2,"야후");

// //tmi) 템플릿 리터럴 (= 문자를 표현하는 새로운 문법)
// /// (ES6) 백틱(`)와 달러($), 중괄호{} 조합으로 사용함
// // 문자열 내에서 변수와 상수를 간결히 표현

// console.log(`${text}저는 ade입니다 저의 성별은 ${gender} 입니다 `);


// // 2. number (숫자형)
// /**
//  *  정수,실수
// *  연산이 가능하다 (+,-,*,/,) */

// let num =100;
// let num2=0.12;

// console.log(num,num2);//100, 0.12
// console.log(num+1);// 101
// console.log(num-1);// 99
// console.log(num*2);// 200
// console.log(num,2);// 50

// console.log(num2+1);// 1.12

// // 3. boolean (불리언)
// /**
//  * true, false (참,거짓) 두 가지 값만 가지는 데이터
//  */

// let isWater=true;
// let haveMoney=false;
// console.log(isWater,haveMoney)//true, false

// //4. null (빈 값)
// /**
//  * 값이 없음을 의도적으로 명시
//  */

// let temp= null;

// console.log(temp); ///null

// temp="hello";
// console.log(temp);// hello

// //5. undefined
// // 값도 없고 탕비도 지정되지 않은 상태


// let x; // 선언만 하고 값이 없음, 변수 선언만 했을때 초기 값으로 undefined 할당

// console.log(x); //undefined


// //quiz
// // q. 코드 실행 시 q1 변수는 어떤 값이 될까

// let q1 =3;
// console.log(q1-2);//1
// console.log(q1)//3

// //q2 다음 코드 실행 시 q2 변수는 어떤 값이 될까?

// let q2 = 10;
// q2= q2+5;//15
// q2=q2-2;//13 

// //q3 다음 코드 실행 시 q3은 어떤 값이 될까?

// const q3=1;
// //q3=q3+1; //에러
// console.log(q3);

// //6. 배열(Array)
// // 배열의 이름은 : fruits
//  //배열의 요소 (아이템): 배열 안에 있는 데이터 하나하나
//  // 배열의 위치(인덱스): 0부터 시작 -zero based numbering
//  // 배열의 길이(크기) : 요소의 개수와 동일
//  ///배열은 자료형x 데이터 구조 

//  const fruits=['orange','pineapple','apple','grape']

// // length:4 - 배열의 길이

// console.log(fruits);
// console.log(fruits[0]);
// //orange
// //fruits배열의 위치가 0인 요소 출력

// //javascript에서는 배열 요소의 자료형이 달라도 됨
// // 왜?
// // js의 동적 타입 특성으로 인한 유연성- 느슨한 언어
// const mixdArraay=[1,'ade',true,{name:'sean'},null] // name: sean -> 객체 (참조타입)

// console.log(mixdArraay);


// //배열안에 배열이 들어갈 수 있음 (중첩) => 2차원 배열


// const koean= [

//     ['가','나','다'],
//     ['라','마','바'],
//     ['사','아','자'],

// ]
// // 배열안에 배열도 0번째 부터 시작

// console.log(koean);
// console.log(koean[0])//['가','나','다']
// console.log(koean[1])//['라','마','바']
// console.log(koean[2])//['사','아','자']

// //quiz
// //- '나'만 뽑아 내려면
// console.log(koean[0][1]);// 나 -> 큰배열 0번째의 1번쨰 인덱스

// // '가자'라는 글씨를 출력하기

// console.log(koean[0][0]+koean[2][2])

// // '사다'라는 글씨를 출력하기

// console.log(koean[2][0]+koean[0][2])


// //3차원 배열에서 숫자 출력

// const nums= [


//     [
//         [1,2,3],
//         [4,5,6],

//     ],
//     [

//         [7,8,9],
//         [10,11,12],

//     ]

// ]

// console.log(

//     nums[1][0][1] //8
// )



// //7. 객체 (object) (key: value)
// // - 프로그래밍(프로그램x)에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조.
// // 속성과 메서드로 구성
// // - 속성: key(키)와 value(값)의 쌍으로 이루어져 있다 - 상태나 특징
// // - 메서드: 함수(function)를 값으로 가진다 -동작이나 행위

// const cat = {

//     name: "장화", // name은 key, 장화 value --속성
//     age: 10,
//     isCute:true,
//     mew:function() {
//         return '냐옹';; // 함수에 대한 결과 값
//     }

// }


// console.log(cat)// object 자체를 출력

// // 배열은 접근할때 인덱스로 접근하지만 객체 접근은?
// // 객체 (object)의 속성(key)에 접근하는 방법

// // 점 표기법 ( . : 키가 값고 있는 값을 갖고 나옴)
// console.log(cat.name); // 장화 
// console.log(cat.age);
// console.log(cat.mew()); // cat.mew를 했을때 function 내용 자체를 가지고 오기 때문에 mew ()를 해야 return값을 가지고 올 수 있음


// // 대괄호 표기qjq ([''])

// console.log(cat['name']); //장화 



// // 키가 변수에 저장되어 있을 때 사용법

// const temVal= 'name'; // cat name을 temVal에 저장했을때
// console.log(cat[temVal]); //변수여서 값이 아닌 키값을 []안에 넣어줌 
//                           // cat['namme'] = cat.name 



// 8. typeof: 자료형을 확인할 수 있는 키워드
// typeof X 형식

console.log(typeof'문자');// string
console.log(typeof 1234);//number
console.log(typeof 3.14); //number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null ); // object 

// js의 초기 구현 중 하나로서, null 값을 object로 분류하는 것은 공식적으로 인정한 언어의 설계상 오류

console.log(typeof undefined);// undefined
console.log(typeof fruits); // 배열은 오프젝트
console.log(typeof cat); // 객체는 오프젝트


// 9. 형변환 
// let mathScore= prompt("수학 입력");
// console.log("mathScore:",mathScore, typeof mathScore);

// let engScore= prompt("영어점수 입력");

// console.log("mathScore:",engScore, typeof engScore);

// let avg= ((Number(mathScore)+Number(engScore))/2);
// console.log(`수학영어 평균 점수는 ${avg}입니다`);

// 1. String() : 문자로 형변환
let str1= true;
let str2= 123;
let str3=undefined;

// 강제적 형변환
console.log(String(str1),typeof String(str1)); //true String
console.log(String(str2),typeof String(str2));// 123 String
console.log(str2,typeof str2);// 123 number
console.log(String(str3),typeof str3);// undefined String
console.log(str1.toString(),typeof str1.toString());// true String
// 값을 문자열로 변환

//2 숫자 형변환

let n1=true;
let n2= false;
let n3= 123.9;

console.log(num(n1),typeof Number(n1)); // 1 number 
console.log(Number(n2), typeof Number(n2)); // 0 number
console.log(Number(n3), typeof Number(n3)); // number
console.log(parseInt(n3,10)); // n3값을 10진수의 정수 (int)로 바꾸겠다 --123
console.log(parseFloat(n3)); // n3 값을 실수(float)로 바꾸겠다 --123.9

// +) null ,undefined를 숫자로 바꾸면
console.log(Number(undefined, typeof Number(undefined))); // NaN number 
//NaN = Not- A -Number (숫자가 아님)
// 정의 되지 않은 값이 숫자로 변환될 수 없기 때문!

console.log(Number(null, typeof Number(null))); // 0 number

