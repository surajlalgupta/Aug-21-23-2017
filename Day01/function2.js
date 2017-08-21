var num = 10;

function confuse(){
    return function(){
        console.log("Scratching my head")
    }
}
var output = confuse()
output();

function doSomething(arg){
    arg()
}

//Closure
var eat = function(){
    console.log("Eating")
}
eat();
doSomething(eat)