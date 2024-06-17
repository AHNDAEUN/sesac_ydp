// JSON
const car =`{

"model":"IONIQ 5",
"company":" HYUNDAI",
"price":50000,
"year":2024,
"isElectricCar": "true",
"option": ["side mirror","smart sensor","built-in cam"]
}`;



console.log(car); // format : JSON


// 역 질렬화 JSON.parse()=> (통신하여 받은 데이터를 객체로 변환)
//json to js obj

obj= JSON.parse(car);
console.log(obj); //js obj

// obj 변수는 js object이므로, .(dot)/[]연사자를 이용해 키 값에 접근 가능

console.log(obj.model); // IONIQ 5
console.log(obj.price); //50000
console.log(obj.hello); // undefined (hello라는 값이 존재하지 않으므로))

// 직렬화 JSOM.stringify() => 통ㅇ신하기 쉬운 포맷(JSON) 변환
// js obj to json

const json = JSON.stringify(obj);
console.log(json,typeof json);

// json 변수는 JSON형태의 문자열(string)이므로 .(dot)/[] 연산자를 이요해서 키값에 접근이 불가능


console.log(obj.model); // undefined
console.log(obj.price); // undefined
console.log(obj.hello); // undefined


// json변수는 String 타입이므로,
// String 타입에 쓸 수 있는 내장 메소드들을 쓸 수 있음
console.log(json.split(""));
console.log(json.toLocaleUpperCase());