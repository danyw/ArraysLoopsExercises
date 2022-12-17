//* Arrays Exercise 1: Breakfast
const breakfast = ["bread", "egg", "tomato"];
breakfast.push("tea");
breakfast.unshift("juice");
console.log(breakfast.length);

//* Arrays Exercise 2: Last Value
let arr = [1, 2, 3, 4, 5, 33, 34, 0, 99];
function lastValue(arr) {
  return arr[arr.length - 1];
}
console.log(lastValue(arr));

//* Arrays Exercise 3: Music
let musicGenres = ["Rock", "Rap", "Pop", "Classical", "blues", "Heavy Metal"];
musicGenres.push("Jazz");
let middle = Math.ceil(musicGenres.length / 2 - 1);
console.log(musicGenres);
console.log(musicGenres[middle]);

//* Arrays Exercise 4: Sort
function sort(unsortedArr) {
  let sortedArr = unsortedArr.sort();
  return sortedArr;
}
console.log(sort(breakfast));

//* Loops Exercise 1: Counting
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i > 0; i--) {
  console.log(i);
}

//* Loops Exercise 2: Tasks
let tasks = ["laundry", "vacuuming", "dusting", "cooking"];
for (let i = 0; i < tasks.length; i++) {
  console.log(`Task ${i + 1}: ${tasks[i]}`);
}

//* Loops Exercise 3: Last Loop Value
function lastLoopValue() {
  let i = 3;
  while (i) {
    alert(i--);
  }
}
// ! alert can be used only within the browser, uncomment next line to use it.
//console.log(lastLoopValue());
// The last value alerted in this code is 1. While loop starts with number i = 3 - which is true.Then, i decreases (i--), and after the 3rd iteration i=0 and gives False.

//* Loops Exercise 4: Even Numbers
function evenNumbersRange() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
evenNumbersRange();

//* Loop Exercise 5: Replace "for"
function xForAlert() {
  for (let x = 0; x < 3; x++) {
    alert(`number ${x}!`);
  }
}
function xWhileAlert() {
  let x = 0;
  while (x < 3) {
    alert(`number ${x}!`);
    x++;
  }
}
//! alert can be used only within the browser, uncomment next two lines to use it.
// xForAlert();
// xWhileAlert();

//* Loop Exercise 6: Sum
arrCalcAdg = [1, 2, 4, 3];
function sumInput(arr) {
  let arrSum = 0;
  for (let x = 0; x < arr.length; x++) {
    arrSum += arr[x];
  }
  arrSum = arrSum / arr.length;
  return arrSum;
}
console.log("The avarage of the given array is: " + sumInput(arrCalcAdg));

//* Strings II exercise 1: addFullStop
const someString = "there should be a Full stop";
function addFullStop(str) {
  if (str.endsWith(".")) {
    console.log(str);
  } else {
    console.log(str + ".");
  }
}
addFullStop(someString);

//* Strings II exercise 2: Capitalize
function capitalize(str) {
  if (typeof str !== "string") {
    console.log("This is not a string");
  } else {
    let capStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log(capStr);
  }
}
capitalize(someString);
