// 내장 메서드란?
// 프로그래밍 언어나 프레임워크에서 기본적으로 제공되는 메서드
// 따로 설치하거나 추가 설정할 필요 없음

//문장열 관련 내장 메서드
// 문자열을 다루는 데 유용한 기능들을 제공

let str = "Happy Birthday"
let str2 = "       Happy Birthday     "

//문자열 인덱싱

console.log(str[0]) //H
console.log(str[0]+str[12]) //Ha


//Hard
console.log(str[0]+str[1]+str[8]+str[11]);


// length: 문자열의 길이 / 1부터 세어야 함 (메서드가 아닌 유일한 String 타입의 속성)
console.log(str.length);//14
console.log(str2.length);//21

//대소문자 변환
console.log(str.toLocaleLowerCase()); //소문자
console.log(str.toLocaleUpperCase()); // 대문자 

//양 끝 공백 제거

console.log(str.trim()); // 공백이 없어서 의미x
console.log(str2.trim()); // 공백 제거 
console.log(str2.trim().length); // 공백 제거된 상태의 길이 


//indexor() 글자 위치 찾기
//위치(index): 0부터 시작
//같은 문자열이 있으면 처음에 나오는 위치


console.log(str.indexOf('y'));//4
console.log(str.indexOf('i'));//7
console.log(str.indexOf(''));//5
console.log(str.indexOf('v'));//존재하지 않는 문자에 대해 검색하면 -1 반환
console.log(str.indexOf()); // 매개변수로 아무 값이 들어가지 않는다면 -1 반환

//slice()문자열 자르기
// 음수값이 들어간다면 뒤에서부터 순서를 센다

console.log(str.slice(10)); //hday -- 10번 위치의 글자~ 끝
console.log(str.slice(1,5)); //appy start 1~부터 end-1 4까지 추출
console.log(str.slice(1,5)); //0은 앞에 -뒤에서부터-- hday 뒤에서 4번째 글자 까지 나옴


console.log(str);
console.log(str2);


//replace() 문자열 바꾸기
console.log(str.replace('p','w'));// Hawpy
console.log(str.replace('B','w'));// wirthday
console.log(str.replaceAll('p','w'));// Hawwy

//split() 문자열 쪼개기 (배열로 변환)
let str3 ='dinner';
console.log(str3.split('e'));// ['dinn','r']  -- 잘려진 기준이 되는 단어는 사라짐
console.log(str3.split('n'));// ['di','','r']-- 기준이 2개일 때 기준이 된 첫번째 n은 사라지고 뒤에 n은 공백으로 남음 

//repeat
console.log(str3.repeat(4));//dinnerdinnerdinnerdinner



/////////////////////////////
//배열 내장 메서드

let arr= [1,2,3,4,5];
let arr2= ['quakka','dog','koala','panda'];

// 배열에 값을 추가하려면?

// arr[5]=6;//기본 -- arr 배열의 5번 인덱스에 6이라는 값을 추가
// console.log(arr);
// arr[8]=100; // 인덱스를 건너뛰면 빈 값이 들어가게됨 
// console.log(arr); //8앞에서 100사이는 빈값이 들어감
                

//push(): 맨 끝에 요소 추가 
arr.push(6); //1,2,3,4,5,6
console.log(10);//1,2,3,4,5,6,10
console.log(arr);

//pop():맨끝에 요소 제거
arr.pop() // 매개변수를 넣지 않는 건 맨끝에 요소를 제거해주기 때문
console.log(arr);



//unshift(): 맨 앞에 요소 추가
arr2.unshift('cat');
console.log(arr2);


//shift(): 맨 앞에 요소 제거
arr.shift();
console.log(arr2);

//length: 배열의 길이 변환
console.log(arr.length);//6

//includes(요소): 요소가 있는지 없는지 검사.(true/false)

console.log(arr2.includes('quokka')); // true
console.log(arr2.includes('apple')); //false


//reverse()
// console.log(arr.reverse());
// console.log(arr); // 원본 배열이 변경됨

//join() : join안에 문자열 기준으로 병합 (배열이 아닌 문자열 합쳐짐)
console.log(arr2);
console.log(arr2.join('')); //quakkadogkoalapanda
console.log(arr2.join('-')); //quakka-dog-koala-panda

//메서드 체이닝
//여러 매서드를 연결해서 사용할  수 있다

console.log('hello'.split('')); //['h','e','l','l','o']
console.log('hello'.split('').reverse());// //['o','l','l','e','h']
console.log('hello'.split('').reverse().join(''));//olleh


