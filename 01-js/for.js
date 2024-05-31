



///



// for (let i= 0; i<10; i++){

//     console.log("df",i+1,"df")

// }

// //~5출력
// for(let i =1; i<=5; i++){

//     console.log(i)
// }
// for(let i =0; i<5; i++){

//      console.log(i+1)
// }


// //감소

// for(let i =5; i>=1; i--){
// console.log(i)
   
// }

//1부터 n까지의 합을 구하기

//let n =10;//어떤 숫자까지 합을 구할지 대한 n
//let sum=0; //합을 저장할 변수

//for (let i= 1; i<=n; i++){

   // sum = (대입 연산자 : 저장 ) sum + i // 변수 저장 공간
    // sum 변수에 값을 재할당 (이전 sum  변수의 값 + 현재 반복변수)

 ///console.log(i);   
 //console.log(sum);   


//}

//1 ~20까지 숫자를 반복
// 1~20 중에 짝수 일 때 합의 구하기

// let sum = 0;
// for (let i=0; i<20; i++){
//     if (i%2==0){
//         console.log("짝");

//         sum+=i
//         console.log(i, sum)


//     }   


// }


//for ~ if 중첩 


//whie문

let idx=0;
while( idx<10){

console.log('d안녕',idx+1)
idx= idx+1;


}



let idx2=0;
while( true){

    //의도적 무한루프 : 조건이 없으면 (ex true라고만 하면) 빠지게 됨 
    // (무한루프에 빠졌다면 브라우저 닫고 다시 실행)
console.log('d안녕',idx2+1)
idx2= idx2+1;
if(idx2 ===10) {
 break;
}
}


/// 구구단 while문 버전

// let i =2, j =1;

// while (i<10) {
//     while (j<10) {

//         console.log(i, "x",j,"=",i*j);
//         j++
        
//     }
//     i++
//     j=1;
    
// }



for (let i = 1; i<10; i++){

    for(let j=1; j<10; j++){
         console.log(`${i}*${j}=${i*j}`)

         
    }
    j=1;
}

////////////

// do~ while 문
/**
 * 
 * js 에서 사용되는 반복문 중 하나로
 * 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후 조건을 검사함
 * 즉) 항상 코드 블록을 한 번 실행한 다음 조건이 참인 동안 반복을 계속!
 *
 */

//구문

// do{

//     //실행할 코드 내용
// }while(조건); //조건에 해당하는 코드를 돌려라!

//ex1 
let g =1;
 do{

    console.log(g);
    g++
    // 로그를 찍고 g를 증가시켜!

}while (g<=5)

//ex2

let number;

do {

    number=parseInt(prompt(`숫자를 입력하세요 (10보다 큰 숫자)`)/10)
} while(number<=10)

    console.log("입력한 숫자 :", number);


    ///////////////////////////
    //break continue
// - 반복문에서 사용되는 제어문

//break
// 반복문을 중단하고 빠져나옴
//continue
// 현재 반복을 중지하고 다음 반복으로 넘어감

// ex)break

for (let i=1; i<=10; i++){

    if (i==5){

        break;  //i=5일 때 반복문 종료
    }
    console.log(i);
}

//출력 결과 : 1,2,3,4


//ex) continue
for (let i=1; i<=5; i++){

    if (i==3){
        continue; // i=3일 때 3만 종료
    }
    console.log(i);
} 

//출력 결과: 1,2,4,5 



