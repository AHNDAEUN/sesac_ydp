

// 함수 : 특정 작업을 수행하기 위해 독립적을 설계된 코드 집합

//용어 정리
// 함수 정의(선언) : 함수를 "생성"
// 함수 호출 : 함수를 사용


// 함수 선언 방식

// 1. 명시적 함수 선언 (= 함수 선언문)
// - 함수 이름과 매개변수를 명시하고 함수의 본문을 중괄호로 감쌈
// - 스크립트 어디에서든 호출할 수 있음
// - function 키워드를 사용하여 함수를 선언하는 방식

function hello () { // 함수  정의
 
    console.log("hello");

    // 특정한 값이 아닐 경우 return 키워드 생략 가능

}

hello(); // 함수 사용(호출)


// return 사용한 함수
function hello2() {

    return 'fsfdfs' ;

}

// return ? (반환값): 함수 내부 (body, block)코드의 최종 결과 값
             // : 최종 결과값을 저장하고 보관하기 위한 키워드
             // : return 키워드를 마나면 함수 실행 중단 (return 다음 코드 더 작성 의미 x)

console.log(hello2());


// 2 함수 표현식 (function Expression)
// 변수에 익명함수를 할당(저장)하는 형태
// 변수가 선언된 이후에만 호출할 수 있다

//* 익명함수
// -> 말그대로 이름이 없는 함수
//-> 이름을 지정할수도 있음
//- 이경우 함수 이름은 내부에서만 사용 가능!

// ex)

const hellos = function hello3(){

    console.log('hello3');
}

hellos();

// hello3-> 블록안에서만 정의되어 있기 때문에 console에 호출하면 블록밖에 정의 되지 않아 undefined이 나옴

const hello13 = function(){
    console.log("fff");
}


const hello14=function(){
return "fff";
}

hello13();
console.log(hello14());

hello13();
hello13();
hello13();
hello13();
hello13();

// 함수는 여러번 호출 가능

console.log('-----------------------------------');

// 매개변수가 있는 함수는 어떡해?? 
// 매개 변수 1개

function food(text){

    return text;
}

console.log(food("제육덮밥"));
// console food ()<-에 제육덮밥을 넣어줘서 functrion food(text)에 text대신 제육 덮밥이 들어갔고 text의 리턴 값도 제육 덮밥이 들어가서 결과값을 노출

const pizza= "피자는 역시 페퍼로니 피자";
console.log(food(pizza));
const colaPrice= 2000;
console.log(food(colaPrice));// 2000 => type? ==> number
//매개 변수는 어떤 데이터타입이든 상관없음

//매개변수가 2개일 때

function music(name, title) {
return `${name}-${title}`

}

console.log(music('아이유','잔소리'));
console.log(music('데이식스','예뻤어'));


function music(name, title) {
     console.log (`${name}-${title}`);
    }

    music('악','후라이');



    //3 화살표 함수 (arrow function) --ES6 부터 지원
//함수 표현식의 축약형, 간결하게 정의
// 단일 표현식의 경우에는 중괄호와 return키워드 생략 가능
// 코드가 길어진다면(여러줄) 중괄호와 return 키워드 명시

//일반형 (단일 표현식)


// function square(x){

//     return x*x;

// }

//축약형
const square=(x) => x * x;

console.log(square(3));//9

// 일반형 (여러줄)
// function triangle (base, height){

//     const area = (base * height)/ 2;
//     return area;
// }


// 축약형
const triangle = (base, height) => {
    const area = (base * height) / 2;
    return area;
}

console.log(triangle(3,4)); //6

// 호이스팅 (hoistiong) -> 함수,변수

// js 에서 변수 및 함수 선언이 해당 범위의 맨 위로 끌어올려지는 현상
// 함수 선언문이 호이스팅!

hello2(); //함수 호출을 정의 보다 먼저 했죠?

function hello2(){
    console.log("hello");
}

//정상 출력

// 함수 표현식 
//- 호이스팅의 대상이 될 수 없음
// 왜
// 변수에 함수가 할당되기 때문에 그 이후에만 호출 가능!
//hello2(); //ReferenceError
const Hello2 = () => {
    console.log("hello2");

}
