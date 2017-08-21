

function print(){
    console.log("Hello World")
}
print()

var print2 = function(){
    console.log("Hello World 2")
}
print2()

function ref(intuit){
    this.something = intuit
}

//SHORTCUT
var ref = (intuit) => this.something = intuit


//Arrow function
var print3 = (msg) => console.log(msg)
print3()

var print4 = () => {
    console.log("1")
    console.log("2")
}