// Inspecting the global object

global.console.log("Hello")
console.log("Hello!")

let hello = "Hello World from Node.js"
console.log(global.hello) // undefined
console.log(hello)

let justNode = hello.slice(17)
console.log("Who let the " + justNode + " out?")