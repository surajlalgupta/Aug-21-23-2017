class Person{
    constructor(theName,theAge){
        this.name = theName;
        this.age = theAge
    }
    eat(items){
        console.log(this.name + " is eating",items)
    }
} 



var p1 = new Person("Sam",12);
p1.eat("Roti");
var p2 = new Person("Ram",45);
console.log("Age of Ram",p2.age)