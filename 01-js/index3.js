
// chap.1)
// 변수 선언 : 변수 정의

//  변수 할당 : (=) 이라는 연산자를 이용해 값을 넣음
//  초기화 : 변수에 처음 할당(넣는)하는 순간

//  ## var
//  - 선언 단계와 초기화 할당 단계가 동시에 진행되며 초기화에는 undefined 값이 들어간다
//  - 중복선언, 재선언이 가능하며 예기치 못한 값을 반환할 수 있음
//  - 선언 이전에 참조하면 언제나 undefined를 반환



// ## let
// - let 키워드로는 변수 중복 선이 불가능하지만 재할당이 가능


//## const
// 재선언이 불가능하고 재할당이 불가능함
// 초반에 선언을 할 떄 반드시 *초기화를 동시에 진행해야 함



// chap.2)
// 변수 선언 키워드 #1 - var

var a; // 변수 선언
console.log(a); // undefined: 값을 할당하지 않았음
a=2; // 변수 할당 (넣음)

console.log(a); // 변수 값 출력 : (2)

var a2= 4; // a2라는 변수에 변수 선언과 할당을 함 (= 초기화)
console.log(a2);

// 재선언
var a2 = 6; //var는 중복선언이 가능
console.log(a2); //6

////////////////////////////////////////////////////////////////////////////////


// **var 변수의 문제점
// 1. 중간에 같은 이름의 변수를 다시 선언해도 기존의 변수에 덮어 씌움
//    - 변수를 선언 했다는 것은 분명히 다른 데이터를 넣으려는 것인데 그것을 기존의 데이터에 덮어 씌우면-> 문제 발생
// 2. 변수가 {블록 단위} 에서 끝나는 것이 아니라 자기 마음대로 전역을 돌어다니면서 영향력을 행사함 -> 의도치 않은 문제 발생
// 3. 호이스팅 문제 
// - 따라서 ES6문법 부터는 VAR 대신 LET 사용을 권장한다

// ** 참고)
//Q) Es6 뭔가요
//A) js 의 표준 버전 중 하나 (js 주요 업데이트)


//////////////////////////////////////////////////////////////////////////////////

// 변수 선언 키워드 #2 - let

let b;
console.log(b); // undefined

b=7;
console.log(b); // 변수값 7 출력

let b2 = 77; // 변수 선언 & 할당
console.log(b2); //77

//중복 선언 불가 확인
//let b2 = 78;  에러 발생: let 키워드는 중복 선언 불가능

b2 =78; // 변수 재할당 가능

// 변수 선언 키워드 #3 - const
//-> 변수 선언과 할당이 동시에 (반드시)
//-> 변하지 않는 값을 변수에 저장할 때 사용 (상수)
// const c; -> 에러 : const 키워드는 선언과 할당을 반드시 동시에 해야한다

const c=3;                          
console.log(c); //3

//c =33;  에러 -> const 변수는 재할당이 불가능


//////////////////////////////////////////

// chap. 3)
//** 중복 선언?

var x =10;
var x = 20;
console.log(x);
// 동일한 변수명을 가진 변수르 한 스코프 내에서 여러번 선언하는 것을 말함
// 이전에 선언된 변수 값을 무시하게 됨
// 마지막에 할달된 값이 저장되면서 코드를 혼동시킬 수 있음


//** 재선언
var y =10;
y=20;
console.log(y);// 20 출력
// 이미 선언된 변수를 같은 스코프 내에서 다시 선언하는 것을 말함

//** 재할당
var x = 10;
x= 20;
console.log (x); //20 출력

// 이미 선언된 변수에 새로운 값을 할당하는 것을 말함

//** 스코프 
// 스코프는 범위라고 생각하면 됨
// 1. 전역 스코프 , 지역 스코프, 3. 블록 스코프


//block 스코프(지역지코프)- {  }

/////////////////////////////////////////////////////////////////////////////////
//chap. 4) 
// ** 호이스팅
// 자바스크립트에서 변수 및 함수 선언니 코드의 최상단으로 올려지는 현상
// -> 변수와 함수의 선언니 실제 코드의 실행전에 처리
// -> 이는 코드를 이해하고 예측하는 데 혼란을 줄 수 있음

//ex)
//console.log(x);  // undefined
//var x = 10; 
//console.log(x); //10

//실제 js 엔진 이렇게 해석함
//var x; // 변수 선언 (호이스팅)
//console.log(x);  // undefined
//var x = 10; 
//console.log(x); //10


//변수 x가 선언되기 전에 사용되었지만, js엔진은 선언을 최상단을 올려서 undefined를 출력한 후 나중에 변기를 초기화 하여 값을 할당
//변수 및 함수는 사용하기 전에 반드시 선언하는 것이 좋음

///let, const 키워드는 호이스팅을 줄이고 블록스코프를 제공하여 변수의 유 범위를 명확히 함
//////////////////////////////////////////////////////////////////////////////////////

//chap. 5)
//변수 이름 규칙 (=식별자 규칙)
// 식별자: 이름을 붙일 때 사용하는 단어 (변수명, 함수명, 클래스명...)
// - 키워드: (예약어) 사용 불가능
//        -Q 키워드란?
//        -A 특별한 역할을 이미 하고 있는 단어 (이미 예약되어 있는 곳을 사용 못하는 것과 같음)
//          -ex) let, var ,const void, return, for, while, class / 변수로 사용하면 안 됨
//          - 숫자 시작 x,   
//          - 특수 문자 : _ $ 만 사용
//          - 공백 문자 (space bar)x

//          Q? 식별자에 단어 두개 이상 작성하고 싶은 경우
//          A (관례) 
//          camelcase
//          ex) redApple , isWater
//          snake_case
//          ex) red_apple, is_water

//            Q) 상수란?
 //           A) 프로그램이 실행되는 동안 값이 변하지 않는 데어터를 나타냄

//              한번 정의되면 프로그램 실행중에는 변경되지 않아야함 (고정된 값)
//               보통 대문자로 표기함 (개발자 커뮤니케이션 내에서 국룰)
//                 ex) TOMATO, APPLE

