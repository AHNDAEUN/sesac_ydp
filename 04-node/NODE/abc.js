// 함수 선언
const add =(a,b) => a+b;  // (a,b) 인수 ab를 받아서 a+b로 돌려줌

//add함수를 다른 js파일에서 불러와 사용할 수 있도록 내보내기 
module.exports = add;