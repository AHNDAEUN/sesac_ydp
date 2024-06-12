// // spread 연산자

// const a = [1,2,3]
// const b = [4,5]

// //배열 합치기
// const spread= [...a,...b]
// console.log(spread); //[ 1, 2, 3, 4, 5 ]

// const c= [...'hello'] //[ 'h', 'e', 'l', 'l', 'o' ]
// console.log(c);


// // 기존 방식으로 쪼개려면
// const d = 'hello'.split('');
// console.log(d); //[ 'h', 'e', 'l', 'l', 'o' ]


// //spread 연사자를 object로 사용해보기

//  const chip = {
//      base:'chip',
//      company:'lotte',
//  };

// //----------------------------

//  const potatochip ={
//      ...chip,
//      flavor:'potato',
//  }


// console.log(chip); //{ base: 'chip', company: 'lotte' }
// console.log(potatochip); //{ base: 'chip', company: 'lotte', flavor: 'potato' }





// -----------------------------


//rest 파라미터
// 함수에 사용 시,
const values = [10,20,30,40,50,60]
function get(a,b,c, ...rest){ //순서대로 읽고, a,b 하나씩 가지고 나머지는 rest에 넣어줘

    console.log(a,b,c); // a,b = 10 20 ,a,b,c= 10 20 30
    console.log(rest); //[ 30, 40, 50, 60 ]
    
}

get(...values) // 함수의 배열의 매개변수로 전달 (... 으로 values 분해)

//-------

const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
  };

  const{flavor, ...abc} = icecream;
  console.log(flavor);  //choco
  console.log(abc);// { company: 'lotte', price: 1000 }


  //-- 배열

  const number= [1,2,3,4,5,6,7,8];

  const[one1,two1, ...rest2] =number;
  console.log(one1,two1); //1 2
  console.log(rest2);//  [ 3, 4, 5, 6, 7, 8 ]