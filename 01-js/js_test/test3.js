
// for문
// let arr =[];
// for(let i=0; i<100; i++){

//     arr.push(i);
   
// }

// console.log(arr)

// let arr=[]
// let sum=0;
// for (let i=0; i<100; i++){

//   arr[i] =i +1;
//   sum += arr[i]
// }
// console.log(arr)
// console.log(sum)

//     //for of

//     sum2=0;
//     for(array of arr){

//         console.log(array)
//         sum2+=array

//     }
//     console.log(sum2)


//     //forEach
//     sum3=0;
//     arr.forEach( function(array){

//         console.log(array)
//         sum3+= array
//     }
// )

// console.log(sum3)





let fruits1= ['사과','딸기','파인애플','수박','참외','오렌지','자두','망고']
let fruits2= ['사과','수박','참외','오렌지','파인애플','망고']

// let same=[];
// let diff=[];

// for(let i= 0; i<fruits1.length; i++)
// if(fruits2.includes(fruits1)){
   
//     same+= fruits1.push[i]
// console.log(same)

// }else{


//     for(let i= 0; i<fruits1.length; i++)
//         if(fruits2.includes(fruits1)){
           
//             diff+= fruits1.push[i]
//             console.log(diff);
//         }
      

//         }
    
            
    
//          same = fruits1.filter(function(x) {
//             return fruits2.includes(x);
        
//         })

//         console.log(same)

        

    //     for(let i =0; i<fruits1.length; i++){

    //         if(fruits2.includes(fruits1[i])){
                
    //             same.push(fruits1[i])
            

     

    //     }else{
    //         diff.push(fruits1[i])
    //     }
    // }


    // console.log(same) 

    // console.log(diff) 
          
    
    
//  let same = fruits1.filter(function (x) {
        
//        return fruits2.includes(x)

//     })
//     console.log(same)

//     let diff = fruits1.filter(function (y) {
        
//         return !fruits2.includes(y)
 
//      })
//      console.log(diff)


  let same =[]
  let diff=[]

  for(let i=0; i<fruits1.length; i++){

    if(!fruits2.includes(fruits1[i])){
         
        same.push(fruits1[i])
        console.log(fruits1[i])
    }
  }

  console.log(same)