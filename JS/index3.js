//클래스

//시작은 대문자

class House {

    constructor(year,name, window){  // 속성이 있는 정해진 명칭 , 매개변수를 몇개줘야하는지 constructor를 보면 됨


         // - 매개변수를 등록
         this.year=year;
         this.name=name;
         this.window=window;
 
    }


    // 메서드 선언
    getAge(){

         console.log(`${this.name}는 건축한지 ${2024-this.year}년이 되었어요`);
    }


    getWindow(){

        console.log(`${this.name}의 창문은 ${this.window}개 입니다. `);
    }
}

const House1= new House(1999,'롯데',1);
 // 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야 함

 console.log(House1); //House { year: 1999, name: '롯데', window: 1 }
 console.log(typeof House1); //object

 console.log(House1.year) //1999
 House1.getAge();
 House1.getWindow();




 // 클래스의 상속


 class Apartment extends House{
    constructor(year,name, window,floor,windowMaker){
        super(year,name, window) // 부모의 속성을 그대로 가져올때
        this.floor =floor;
        this.windowMaker= windowMaker;

    }

   // Apart만의 메서드 

   getAptInfo(){

    return `${this.year}년에 지어진 ${this.name} 아파트의 
    총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;

 }
    

//override(오버라이드) 부모의  메서드와 같은 함수를 재정의 할 떄
//- 부모의 메서드를 가지고 오면 자식의 메서드가 덮어짐
 getWindow(){
    return `${this.name} 아파트의 ${this.window} 개의 창문은
    총 층수는 ${this.windowMaker} 회사에서 생산되었습니다.`;
}

}


const apt1 = new Apartment(2022,'래미안',3, 20, 'KCC' )
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());