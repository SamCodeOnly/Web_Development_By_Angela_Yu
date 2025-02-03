import React from "react";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      
    </div>
  )
}

// // var numbers = [3, 56, 2, 48, 5]

// // 1.Map - create a new array by doing something with each item in an array.


// // const newNumb = numbers.map(function(X) {
// //   return X * 2;
// // });
// // console.log(newNumb)



// // var newNumbers = [];

// // numbers.forEach(function(x) {
// //   newNumbers.push(x * 2);
// // });
// // console.log(newNumbers)






// // 2. Filter - create a new array by keeping only the items that meet a certain condition

// // const graterThanTen = numbers.filter(function (num){
// //   return num > 10;
// // })
// // console.log(graterThanTen)



// // var greaterThanTen = [];
// // numbers.forEach(function (num){
// //   if (num > 10) {
// //     greaterThanTen.push(num);
// //   }
// // })
// // console.log(greaterThanTen);







// // 3. Reduce - use a single value to combine all items in an array into a single value
// // var newNumber = 0;
// // numbers.forEach(function (currentNumber){
// //   newNumber += currentNumber;
// // })
// // console.log(newNumber)

// // var add = numbers.reduce(function (accumulator , currentNumber){
// //   console.log("accumulator: " + accumulator)
// //   console.log("currentNumber: " + currentNumber)
// //   return accumulator + currentNumber;
// // })

// // console.log(add)


// // Find - find the first item that matches from an array
// // var search = numbers.find(function (num){
// //   return num < 10;
// // })
// // console.log(search)





// // FindIndex - find the index of the first item that matches
// // var index = 0;
// // numbers.forEach(function(num){
// //   if(num > 10){
// //     return index;
// //   }
// //   index++;
// // })


// // var index = numbers.findIndex(function (num){
// //   return num > 10;
// // })
// // console.log(index)

// console.log(emojipedia)

// // 1. find every meaning key from the emojipedia array
// // 2. cut each meaning piece from the emojipedia array till 100 char and add them into new array

// // var meanings = [];
// // emojipedia.forEach(function(Entry){
// //   meanings.push(Entry.meaning.substring(0,100))
// // })

// var newEmojiPedia = emojipedia.map(function(emojiEntry){
//   return emojiEntry.meaning.substring(0,100)
// })

// console.log(newEmojiPedia)


















































var numbers = [3, 56, 2, 48, 5];

// const numbers = numbers.map(x => x * x)


// 1. Map - Create a new array by doing something with each item in an array
// const newNumbers = numbers.map(function (x) {
//   return x * 2
// })

// const newNumbers = numbers.map(x => x * 2)




// 2. Filter - Create a new array by doing something with each item in an array.
// const newNumbers = numbers.filter(function (x){
//   return x > 10
// })

// const newNumbers = numbers.filter(x => x > 10)




// 3. Reduce = Accumulate a value by doing something to each item in an array.
// const newNumbers = numbers.reduce(function(accumulator, currentNumber){
//   return accumulator + currentNumber;
// })

const newNumbers = numbers.reduce((accumulator,currentNumber)=> accumulator + currentNumber)

console.log(newNumbers)











export default App
