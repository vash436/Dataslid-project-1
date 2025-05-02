const {addNumber, multiplyNumber, typing} = require('./index')


// const {} = require('./Algorithm/index.js')
// MediaSourceHandle.exports = {addNumber}
// console.log(addNumber(2, 3))
function doSomething() {
    const a = multiplyNumber(5, 8);
    if(a >= 10){
      console.log("Result is more than 10")  
    }
    else {
        console.log("Result is less 10")
    }
  
}

// doSomething();
function runSomething(){
    typing()
    console.log("i am doing my own")
}

runSomething()
