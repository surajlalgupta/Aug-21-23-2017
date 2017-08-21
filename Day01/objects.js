let arr = new Array(1,3,4,5)
let arr2= [1,3,4,5]

let str1 = new String("Java way")
let str2 = "Easier way"

let obj1 = new Object()
obj1.name = "Sam"
obj1.age = 12

let obj2 = {}
obj2.name = "Ram"
obj2.age = 23

//JSON
let obj3 = { name: "Sachin", age:42 }

let name = "Virat"
let age = 30
//OLD
let person1 = {
    name: name,
    age: age,
    eat: function(){}
}
//LATEST
let person2 = { name, age, eat(){} }
console.log(person2)
console.log(JSON.stringify(person2))

let objInStr = "{\""  + "person\":\"" + name  + "\"}"
console.log(objInStr)
let objAsObject = JSON.parse(objInStr)
console.log(objAsObject)

