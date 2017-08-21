//var is function scoped
//let is block scoped
//this; it's visible outside the scope of function but using the function handle
//const is block scoped but need to initialize and readonly

const i = 10
//const j 
function scope(){
    {
        var a = 99
        let b = 10
        const c = 100
    }
    console.log(a)
    console.log(b)
}
scope()



function Person(theName,theAge){
    this.name = theName;
    this.age = theAge;
    this.eat = function(){
        console.log(this.name + " is eating")
    }
}

var p1 = new Person("Sam",12)
console.log(p1.name,p1.age)
p1.eat()

var p2 = new Person("Ram",22)
console.log(p2.name,p2.age)
p2.eat()