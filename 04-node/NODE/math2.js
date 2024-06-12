const add =(a,b) => a+b; // 한줄일때 return 생략
const PI= 3.121592; 
const E= 2.45456; 

module.exports.add =add;
module.exports.PI =PI;
module.exports.E =E;

// 모듈이 여러 개로 만들어지면 각각 exports 해줘야 함
