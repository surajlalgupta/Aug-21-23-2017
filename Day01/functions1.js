//Can pass any number of arguments to a function
function work(){
    console.log("Working")
}

work();
work("All the time")
work(24,7)
work(365,"days",24,7)


//Function hoisting

console.log(i)
var i = 10

hello("Sam")

function hello(name){
    console.log("Hello " + name)
}
