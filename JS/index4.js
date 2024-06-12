// &&(and)  || (or)
//true && true

// true && false

// const x= 5;
// const result= x || 100;
// console.log(result); //5

// const y= 7;
// const result3= x<y && 'y가 큼';
// console.log(result3);

//falsy -거짓으로 판명되는 것: undefined, null, 0, false, '', NaN
let userColor = undefined;
let defaultColor = 'blue';

let currentColor= userColor || defaultColor;
console.log(currentColor);
