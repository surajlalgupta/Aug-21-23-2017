let person = {
    name: "Sam",
    age: 12
}

//Destructuring
let {name,age} = person
//console.log(name,age)

//let name = person.name
//let age = person.age

let arr = []
arr.push(1)
arr.push(2)
arr.push(1)
console.log(arr.length)

let set = new Set()
set.add(1)
set.add(2)
set.add(1)
console.log(set.size)

let citiesArr = []
citiesArr["India"] = ["chennai","pune"]

let cities = new Map()
cities.set("India",["Chennai","Pune","Mumbai"])
cities.set("USA",["Houston","NY","NJ"])
cities.set("UK",["London","Bristol","Hampshire"])

for(let [key,value] of cities){
    console.log(key,value)
}

let countrySelected = "USA"
console.log(cities.get(countrySelected))