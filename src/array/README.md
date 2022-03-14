# Przypomnienie list
```js
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2

let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1

let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]

let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

let first = fruits.shift() // remove Apple from the front
// ["Banana"]

let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]

let removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Mango"]
```
```js
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]

```
```js
let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'
```
```js
Array.prototype.at()
Returns the array item at the given index. Accepts negative integers, which count back from the last item.

Array.prototype.concat()
Returns a new array that is this array joined with other array(s) and/or value(s).

Array.prototype.copyWithin()
Copies a sequence of array elements within the array.

Array.prototype.entries()
Returns a new array iterator object that contains the key/value pairs for each index in the array.

Array.prototype.every()
Returns true if every element in this array satisfies the testing function.

Array.prototype.fill()
Fills all the elements of an array from a start index to an end index with a static value.

Array.prototype.filter()
Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

Array.prototype.find()
Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found.

Array.prototype.findIndex()
Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.

Array.prototype.flat()
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Array.prototype.flatMap()
Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.

Array.prototype.forEach()
Calls a function for each element in the array.

Array.prototype.includes()
Determines whether the array contains a value, returning true or false as appropriate.

Array.prototype.indexOf()
Returns the first (least) index of an element within the array equal to an element, or -1 if none is found.

Array.prototype.join()
Joins all elements of an array into a string.

Array.prototype.keys()
Returns a new array iterator that contains the keys for each index in the array.

Array.prototype.lastIndexOf()
Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found.

Array.prototype.map()
Returns a new array containing the results of calling a function on every element in this array.

Array.prototype.pop()
Removes the last element from an array and returns that element.

Array.prototype.push()
Adds one or more elements to the end of an array, and returns the new length of the array.

Array.prototype.reduce()
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

Array.prototype.reduceRight()
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

Array.prototype.reverse()
Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)

Array.prototype.shift()
Removes the first element from an array and returns that element.

Array.prototype.slice()
Extracts a section of the calling array and returns a new array.

Array.prototype.some()
Returns true if at least one element in this array satisfies the provided testing function.

Array.prototype.sort()
Sorts the elements of an array in place and returns the array.

Array.prototype.splice()
Adds and/or removes elements from an array.

Array.prototype.toLocaleString()
Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.

Array.prototype.toString()
Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.

Array.prototype.unshift()
Adds one or more elements to the front of an array, and returns the new length of the array.

Array.prototype.values()
Returns a new array iterator object that contains the values for each index in the array.

Array.prototype[@@iterator]()
Returns a new array iterator object that contains the values for each index in the array.
```
# forEach

# filter

# map