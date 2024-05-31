
// // 

// function multifly(num, num2) {

//          return num* num2;
// }

// console.log(multifly(3,7));
// console.log(multifly(2,2));

// multifly();



// function square (text){

// console.log(text**2)

// }


// square(4);
// square(11);
// square(5);


// let age =Number(prompt("나이를 입력해 주세요!"))

// if(age>=20){

//     console.log("성인");

// }else if(age>=17){

//     console.log("고딩");


// }else if(age>=14){
    
//     console.log("중딩");


// }else if(age>=8){
    
//     console.log("초딩");


// }else{

//     console.log("유아");

// }


// let ip= Number(prompt("숫자를 입력해 주세요"))
// for (let i= 0; i<ip; i++ ){

//    if( i%13==0 && i%2==1){
//     console.log(i);
//    }
// }

// let i= 2;
//     j= 1;


// while(i<10){

//     while (j<10) {

//         console.log(`${i}x${i}=${i*j}`)

//         j++
//     }

//     i++
//     j=1;
// }

    
    // let n=1;
    //  sum=0;


    //  while (0<n<100) {

    //         if(n%2==0 || n%3==0){
    //             console.log(n);

    //             sum+=n
    //         }
    //         console.log(sum)
    //     }


    let sum = 0;

    for (let i=0; i<=100; i++){

        if(i%2==0 || i%5==0){
            console.log(i)
 
            sum+=i;
        }
          console.log(sum)
    }