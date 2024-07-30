// 실행어: ex - node (index).js

// Spread 연산자 사용
// 두개의 문자열을 합쳐서 배열로 만들기
//["a","b","c","d","x","y","z"]

const arr1 =['a','b','c'];
const arr2 =['x','y','z'];

// 1. 답
// const arr3 = [];
// arr3.push(...arr1);
// arr3.push(...arr2);

//2. 답
const arr3 =[...arr1,...arr2];

console.log(arr3);
//------------------------------------------------


//1. Shape  클래스 만들기

class Shape {

    constructor(x, y) {

        this.x =x;
        this.y =y;
    }

    getArea() {
        return this.x * this.y;
    }

    
}

let rec1 = new Shape(3, 4);

console.log('직사각형 넓이:',rec1.getArea());


// 2. 클래스 상속
//Shape를 상속받은 각각의 클래스 Rectangle, Triangle, Circle 클래스를 이용해서 인스턴스 하나씩 생성
// getArea로 사각형 삼각형, 원의 넓이가 잘나오는 확인

class Rectangle extends Shape {

    constructor(x, y) {

        super(x, y);

    }

        // 대각선 길이 구하기
        getDiagonal(){
            return Math.sqrt(this.x**2 + this.y**2)
        }
}

    const rec2 = new Rectangle(3, 4);
    console.log('대각선 길이:', rec2.getDiagonal());


 class Triangle extends Shape {

    constructor(x, y) {
        super (x, y);

    }

    //삼각형 넓이  
    getArea() {

        return(this.x*this.y)/2;
    }
 }  

 const tri = new Triangle(3, 4);
 console.log("triangle:",tri.getArea());

 class Circle extends Shape{

    constructor (x, y, radius){
        super(x, y);
        this.radius = radius;
    }

    // 원의 넓이
    getArea() {
        return(this.radius**2*Math.PI)
    }    

}

const cir = new Circle(1, 1, 2)
console.log('원 넓이', cir.getArea());


//-----------------------------------------------


// Promise 1
// function call(name, cb) {
//     setTimeout(function() {
//         console.log(name);
//         cb(name);
//     }, 1000);
// }

// function back(cb) {
//     setTimeout(function() {
//         console.log('back');
//         cb('back');
//     }, 1000)
// }

// function hell(cb) {
//     setTimeout(function() {
//         cb('callback hell');
//     }, 1000);
// }

// call('kim', function (name) {
//     console.log(name + '반가워');
//     back(function (txt) {
//         console.log(txt + '을 실행했구나');
//         hell(function (message) {
//             console.log('여기는' + message);
//         });
//     });
// });




// promise2
 async function exec() {
    let user = await LargestContentfulPaint('ade');
    console.log(user + "님 환영합니다.");
    let videos = await getVideo(user);
    console.log(videos);
    let title = awaitgetDetail(videos[0]);
    console.log(title);

    exec();
    
 }
