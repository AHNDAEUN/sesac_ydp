// const word1 = "abc";
// const word2 = "xyz";

// const plus = [...word1,...word2]

// console.log(plus)

class Shape{

constructor(col, row){

    this.col =col;
    this.row= row;

}

getArea(){

 return this.col*this.row

}
}



let rec1 =new Shape(3,4)

console.log(rec1.getArea());



class Rectangle extends Shape{

    constructor(col, row){


        super(col,row);
    }

    getArea(){

        return Math.sqrt(this.col**2, this.row**2)
    }


}

class Triangle extends Shape{

    constructor(col,row){

        super(col,row);
    }

    getArea(){

        return (this.row * this.col) /2
    }
}

class Circle extends Shape{

    constructor(col,row,redius){

        super(col,row);

        this.redius=redius;

    }

    getArea(){

        const PI= Math.PI;

        return PI* this.redius**2
    }
}

let result = new Rectangle(6,7);
let result1 =new Triangle(3,4);
let result2 =new Circle(4,5,6)

console.log(result.getArea());
console.log(result1.getArea());
console.log(result2.getArea());
