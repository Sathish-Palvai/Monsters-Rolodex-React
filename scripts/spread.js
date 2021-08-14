let myArray1 = [1,2,3]
let myString = "Hey planet!"
let myObject = {
    name: "Fernando Doglio",
    age: 35,
    country: "Uruguay",
    [Symbol.iterator]: function* () { //we're making the object iterable so we can spread it
        yield myObject.name
        yield myObject.age
        yield myObject.country
    }
}

function test() {
    console.log(arguments)
}

let splitLetters = [...myString] //no longer need for myString.split()
console.log(splitLetters)
//[ 'H', 'e', 'y', ' ', 'p', 'l', 'a', 'n', 'e', 't', '!' ]
let objLetters = {...myString}
console.log(objLetters)
test(...myString)
test.call(null, ...myArray1)