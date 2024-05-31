//배열에서 반복문 사용
//- 기본) for문
//-for of문
//-forEach()메서드

//배열_ for문 사용 이유
const fruits=['배','사과','오렌지','망고','포도']
console.log(fruits.length);//5
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

//let s =fruits.length
for (let f= 0; f<fruits.length; f++){

    console.log(fruits[f]);

}

//공통 예제
const arr = [1,2,5,6,7];
const alpha = ['a','b','c','d'];



// #1 기본 for문

for (let a =0; a<arr.length; a++){

    console.log(arr[a]);
}

// #2 for of 반복문
// 이 반복은 배열의 요소를 직접 참조하므로 인텍스를 사용할 필요x
// 순서가 있는 구조 반복에 적합

for(let al of alpha){

    console.log('al>',al); //--여기서 선언된 것은 블록스코프 안에서만
}
// -> alpha의 각 요소를 반복 하면서 al 변수에 순서대로 할당하고 각각 요소에 대해 반복문 블록 실행


// #3 forEach() 메서드
// 배열의 각 요소에 대해 지정된 함수를 실해
// 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 적업을 수행할 때 사용
// 각 요소에 대해 함수가 호출 될 때마다 해당 요소가 함수의 인자로 전달 됨.

alpha.forEach(function (al)

{
   // al: currentValue를 의미, 반복하고 있는 현재 요소
    console.log(al);
}


)

////////////////////////////////////////////////////////////
alpha.forEach(function (al, idx)

{
   // al: currentValue를 의미, 반복하고 있는 현재 요소
   // idx: currentValue의 인덱스를(위치) 말함
    console.log(al,idx);
}

)

////////////////////////////////////////////////////////////////

alpha.forEach(function (al, idx,arr)

{
   // al: currentValue를 의미, 반복하고 있는 현재 요소
   // idx: currentValue의 인덱스를(위치) 말함
   // arr: forEach를 호출한 배열
    console.log(al,idx,arr);
}

)


/// 배열의 기타 메서드


// map,filter,find메서드
// 조건에 따라 요소를 변형하거나 선택
//#1 map()
//배열의 각 요소에 대해 지정된 함수를 호출하고 그결과로 새로운 배열을 생성

const numbers= [1,2,3,4,5];
const doubleNumbers = numbers.map(function(num){


    return num * 2;
})
console.log(doubleNumbers); //[2,4,6,8,10]


//#2 filter()
//- 배열의 각 요소에 대해 지정된 함수를 호출하고 그 결과가 true인 요소들로 이루어진 새로운 배열 생성


const pracNumbers= numbers.filter(function(num){

    // numbers 요소를 filter로 통해 걸러서 원하는 요소를 보여고 함
    // 함수의 조건을 numbers에 하나씩 다 적용해서 true인 것들만 뽑아 새로운 배열 생성
    return num % 2 ===0;
}

)
console.log(pracNumbers);

// #3 find()
//조건을 만족하는 첫 번째 요소 찾기

// 조건에 만족 -> 해당 요소 반환
// 조건 불만족 -> undefined 반환

const pracNumbers2=numbers.find(function(num){

    return num % 2 ===0;
})

console.log(pracNumbers2); //2


//+ 옵션) for ~ in 반복문
//object(객체)에 사용 가능한 반복문
//객체의 key를 반복할 수 있는 구문


const dog ={

    name: '태풍',
    gender: 'm',
    info: 'cute',
}

for (let key in dog ){

    console.log(key, dog[key]); //객체의 각 속성(key. value)에 대해 실행할 코드


}

//key : key
//value : dg[key]

// -- 참고 
//변수 = key = 각 속성의 키를 저장하는 변수
// 객체 = dog = 속성을 반복할 객체 
