// js 표준 내장 객체
// - 기본적으로 미리 정의된 객체
// 모든 js 환경에 사용할 수 있는 내장 객체들을 말함
// 자주 사용되는 기능을 미리 구현해 놓은 것

// #1, Date 객체 : 시간, 날짜

// 날짜 생성하여 저장

let now= new Date();

console.log(now);


//참고 타임스탬프(timestamp)
//: 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// "에포크" 이후의 시간을 나타냄
//에포크?: 특정 시간의 기준점
//왜 이 시간 이후로 계산을 하나요?
// 1. 역사적인 이유- 유닉스 os에서 타임스탬프를 측정하는데 사용된 날짜 초기 컴퓨터 시간 나타냄
// 2. 기술적인 편의성 시간을 숫자로 편하는 방법. 수학적으로 편리한 계산을 가능하게함



// new Date(timestamp)

let jen_01_1970 =new Date(0);
console.log(jan_01_1970);//thu jan 01 1960 09:00 :00 GMT+0900

let jan_02_1970 =new Date(24*3600*1000);
console.log(jan_02_1970);//24시간

//new Date(date_string)

let date =new Date('2024-06-03')
console.log("date>",date);

let date2 =new Date('2024','06','03')
console.log("date2>",date2);

//관련 메서드
// 객체 점 접근성
//getDate(): 월의 몇 번째 날인지 반환
//getDay(): 주의 몇번째 날인지 반환(0부터 시작)
//getMonth():몇번째 달인지 반환 (0부터 시작)
//getHours(): 시간을 반환 (0부터 23까지)
//getMinutes(): 분을 반환(0부터 59까지)
//getSeconds(): 초를 반환 (0부터 59까지)
//getMillisecons():밀리초를 반환 (0부터 999까지)
// get time: 1970년 1월1일 현재까지 밀리초 단위의 시간을 반환

console.log(now.getFullYear());// 2024
console.log(now.getMonth()+1); //5 , 0부터 시작하기 때문에 6월일땐 +1,( 0~22 주의)
console.log(now.getHours());//13
console.log(now.getDate());//3
console.log(now.getMinutes());//38
console.log(now.getSeconds());//39
console.log(now.getMilliseconds());// 0~999
console.log(now.getDay);// 0(일)~ 6(토)


console.log("----------------");

// math 객체
// 수학적인 상수와 함수
// 속성
console.log(Math.E);//자연로그 2.718..
console.log(Math.PI);// 파이
console.log(Math.SQRT2);// 2의 제곱근

//메서드
console.log(Math.min(100,-2,0,5));//-2
console.log(Math.min(100,-2,0,5));//100
console.log(Math.round(5.3124));//5 -> 반올림
console.log(Math.ceil(5.3124));//6 -> 강제 올림
console.log(Math.floor(5.7124));//5 -> 강제 내림
console.log(Math.random());// 0 <= x <1 번위의 난수


// Math.random() 응용 예시
// 0~9
console.log(Math.random()*10) // 0<= x <10
console.log(Math.floor(Math.random()*10)); // 0<= x <9

// 0~10
console.log(Math.random()*11);// 0<= x <11
console.log(Math.floor(Math.random()*11));

// 퀴즈 (실습)
// 1~100
//20~22

console.log(Math.random()*100);
console.log(Math.floor(random()*101));

console.log(Math.floor(Math.random() * 3)) + 20; // 20 <= x < 23 