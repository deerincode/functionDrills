/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
// function sayHello(){
//   console.log("hello world")
// }
// sayHello()

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
// const print = (message) =>{
//   console.log(message)
// }
// print("This function works so well!!!!!")

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
// const printMessage = (message) =>{
//   console.log(`Today's message is: ${message}`)
// }
// printMessage("Shorts are comfy and easy to wear!")

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
// function calculateSecondPower(baseNumber) {
//     return baseNumber ** 2
//   }
//   console.log(calculateSecondPower(3))
  
  /*
   * Prompt 5:
   *
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */
  // const reverseMessage = (message) =>{
  //   //let wordz = "This is a sentence"
  //   let reverseString = ''
  //   for(i = message.length-1; i >= 0; i--){
  //   reverseString += message[i]
  //   }
  //   console.log(reverseString)
  // }
  // reverseMessage("Be glad I'm not using a palindrome")
  
  /*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
  // const multiply = (a,b =2) => a * b

  // console.log(multiply(3))
  
  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */
  // function makePerson(firstname, lastname) {
  //   let person = {
  //     firstname: firstname,
  //     lastname: lastname
  //   }
  //   return person
  // }
  
  // const zakk = makePerson('Zakk', 'F')
  // const jimmy = makePerson('Jimmy', 'B')
  // console.log(zakk)
  // console.log(jimmy)
  
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.
   */
  // const createPocketMonster = (monsterName, type1, type2, level) =>{
  //   let pocketMonster = {
  //     monsterName: monsterName,
  //     type1: type1,
  //     type2: type2,
  //     level: level
  //   }
  //   return pocketMonster
  // }

  // const legallyDistinctPikachu = createPocketMonster("ThunderMouse","Electric","Normal",25)
  // const deerMonster = createPocketMonster("Doebadiebadoe","Fighting", "Fairy", 32)
  // console.log(legallyDistinctPikachu)
  // console.log(deerMonster)
  
  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */
  // const createAndReturnGameCollection = (game1, game2, game3, game4, game5) =>{
  //   let gameCollection = [game1, game2, game3, game4,game5]
  //   let returnCollection = []
  //   for(let i = 0; i <= 4; i++){
  //     if(gameCollection[i]){
  //       returnCollection.push(gameCollection[i])
  //     }
  //   }
  //   return returnCollection
  // }

  // console.log(createAndReturnGameCollection('Final Fantasy VII', 'Morrowind', 'Slay the Spire'))
  
  
  /*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  
  /** Starter Code */
  // let sum = 0

  // const addToSum = (number) => sum += number

  // addToSum(3)
  // addToSum(1)
  // addToSum(100)
  // addToSum(20)
  // console.log(sum)
  
  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */

  // const addNumberArray = (array) =>{
  //   let arraySum = 0
  //   for (let i of array){
  //     arraySum += i
  //   }
  //   return arraySum
  // }

  // testArray = [3, 1, 100, 20]
  // console.log(addNumberArray(testArray))
  
  
  /*
   * Prompt 12:
   *
   * Write a function that takes a string and returns an array of every word in
   * the string.
   */
  // const returnStringAsArray = (string) =>{
  //   let returnArray = string.split(" ")
  //   return returnArray
  // }
  
  // console.log(returnStringAsArray("If you trust in yourself and believe in your dreams"))

  
  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  
  /** Starter Code */
  // testFunc()()
  
  
  
  /*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
  function add(a, b) {
    return a + b
  }

  
  /*
   * Prompt 15:
   *
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
   */
  function returnOtherFunction() {
    return printHello()
  }

  const printHello = () =>{
    return "hello world"
  }

  console.log(returnOtherFunction())