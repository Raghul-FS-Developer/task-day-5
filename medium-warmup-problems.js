// Problems:


// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
console.log('Given a number, “addFive” returns 5 added to that number.');
function addFive(num) { 
    return num+5;
}
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));
console.log(addFive(10));



// Write a function called “getOpposite”.
// Given a number, return its opposite
console.log('\nGiven a number, return its opposite')
let getOpposite = (num) => {
    if(isNaN(num)) return -1
    else -num;
}

console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite('5a'));
console.log(getOpposite(5.5));

// Fill in your code that takes an number minutes and converts it to seconds.

// Examples
// toSeconds(5) ➞ 300

// toSeconds(3) ➞ 180

// toSeconds(2) ➞ 120
console.log('\nFill in your code that takes an number minutes and converts it to seconds.');
let toSeconds = (minutes) => minutes * 60;
console.log(toSeconds(5)); 
console.log(toSeconds(3)); 
console.log(toSeconds(2)); 

// Create a function that takes a string and returns it as an integer.

// Examples
// toInteger(“6”) ➞ 6

// toInteger(“1000”) ➞ 1000

// toInteger(“12”) ➞ 12
console.log('\nCreate a function that takes a string and returns it as an integer.');
let toInteger = (string) => Number(string);
console.log(toInteger('6'));
console.log(toInteger('1000'));
console.log(toInteger('12'));


// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// nextNumber(0) ➞ 1

// nextNumber(9) ➞ 10

// nextNumber(-3) ➞ -2
console.log('\nCreate a function that takes a number as an argument, increments the number by +1 and returns the result.');
let nextNumber = (num) => num+=1;
console.log(nextNumber(0));
console.log(nextNumber(9));
console.log(nextNumber(-3));


// Create a function that takes an array and returns the first element.

// Examples
// getFirstElement([1, 2, 3]) ➞ 1

// getFirstElement([80, 5, 100]) ➞ 80

// getFirstElement([-500, 0, 50]) ➞ -500
console.log('\nCreate a function that takes an array and returns the first element.');
let getFirstElement = (arr) => arr[0];
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement([80, 5, 100]));
console.log(getFirstElement([-500, 0, 50]));


// Convert Hours into Seconds

// Write a function that converts hours into seconds.

// Examples
// hourToSeconds(2) ➞ 7200

// hourToSeconds(10) ➞ 36000

// hourToSeconds(24) ➞ 86400
console.log('\nConvert Hours into Seconds');
let hourToSeconds = (hour) => hour * 3600;
console.log(hourToSeconds(2)); 
console.log(hourToSeconds(10)); 
console.log(hourToSeconds(24)); 


// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22
console.log('\nFind the Perimeter of a Rectangle');
let findPerimeter = (l, b) => (2 * (l+b));
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));


// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// 83 + 34 = 117
console.log('\nLess Than 100?');
let lessThan100 = (n1, n2) => ((n1 + n2) < 100 ? true : false);
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0
console.log('\nremainder of a division operation');
let remainder = (n1, n2) => n1%n2;
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

// Old macdonald had a farm:

// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// CountAnimals(2, 3, 5) ➞ 36

// CountAnimals(1, 2, 3) ➞ 22

// CountAnimals(5, 2, 8) ➞ 50
console.log('\n Old macdonald had a farm:');
let CountAnimals = (t, h, p) => t*2 + h*4 + p*4;
console.log(CountAnimals(2, 3, 5));
console.log(CountAnimals(1, 2, 3));
console.log(CountAnimals(5, 2, 8));


// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000
console.log('\nFrames Per Second');
let frames = (num1, num2) =>num1 * 60 * num2;
console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// Examples
// divisibleByFive(5) ➞ true

// divisibleByFive(-55) ➞ true

// divisibleByFive(37) ➞ false
console.log('\nCheck if an Integer is Divisible By Five');
let divisibleByFive = (num) => num%5==0 ? true : false;
console.log(divisibleByFive(5));
console.log(divisibleByFive(-55));
console.log(divisibleByFive(37));

// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// Input:
// isEven(12);➞ true
// isEven(0);➞ true
// isEven(11);➞ false
// isEven(“11h”); -1
console.log('\nWrite a function called “isEven”.');
let isEven = (num) => isNaN(num) ? -1 : (num%2==0 ? true : false);
console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven('11h'));

// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3); true
// areBothOdd(1, 4); false
// areBothOdd(2, 3); false
// areBothOdd(0, 0); false
console.log('\nWrite a function called “areBothOdd”.');
let areBothOdd = (num1, num2) => ((num1%2!==0 && num2%2!==0)? true : false);
console.log(areBothOdd(1, 3));
console.log(areBothOdd(1, 4));
console.log(areBothOdd(2, 3));
console.log(areBothOdd(0, 0));

// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

// Input:

// getFullName(“GUVI”, “GEEK”);
// getFullName(“GUVI”, );
// getFullName(, “GEEK”);
// getFullName(“”, “”);

// Output:

// “GUVI GEEK”
// “GUVI”
// “GEEK”
// “”
console.log('\nWrite a function called “getFullName”.');
let getFullName = (firstName, lastName) =>`'${`${firstName} ${lastName}`.trim()}'`;
console.log(getFullName('GUVI', 'GEEK'));
console.log(getFullName('GUVI',''));
console.log(getFullName('', 'GEEK'));
console.log(getFullName('',''));

// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
// Input:

// getLengthOfWord(“GUVI”);
// getLengthOfWord(“”);
// getLengthOfWord();
// getLengthOfWord(9);
console.log('\nWrite a function called “getLengthOfWord”.');
let getLengthOfWord = (word) => (word === undefined || (typeof word) !== 'string') ? -1 : word.length;
console.log(getLengthOfWord('GUVI'));
console.log(getLengthOfWord(''));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));

// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
// Input:
// isSameLength(“GUVI”, “GEEK”);
// Output:
// true
console.log('\nWrite a function called “isSameLength”.');
let isSameLength = (word1, word2) => word1.length === word2.length ? true : false;
console.log(isSameLength('GUVI', 'GEEK'));

// Create a function to calculate the distance between two points defined by their x, y coordinates
console.log('\ndistance between two points')
let getDistance = (x1, x2, y1, y2) => Math.sqrt((Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)))

// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
// Input:
// getNthElement([1, 3, 5], 1);
// Output:
// 3
console.log('\nWrite a function called “getNthElement”.');
let getNthElement = (array, n) => array[n];
console.log(getNthElement([1, 3, 5], 1));


// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
// Input:
// getLastElement([1, 2, 3, 4]);
// Output:
// 4
console.log('\nWrite a function called “getLastElement”.');
let getLastElement = (arr) => arr[arr.length-1];
console.log(getLastElement([1, 2, 3, 4]));

// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var obj = {
mykey: 'value'
};

// Input:
// getProperty(obj,’mykey’);
// getProperty(obj,’dummykey’);
// Output:
// value
// NA

console.log('\nWrite a function called “getProperty”.');
let getProperty = (obj, key) => obj[key];
console.log(getProperty(obj, 'mykey'));
console.log(getProperty(obj, 'dummykey'));

// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

var obj = {
}
// Input:
// addProperty(obj, “mykey”);

// Output:
// {
// mykey: true
// }
console.log('\nWrite a function called “addProperty”.');
let addProperty = (obj, key) =>  { obj[key] = true; return obj};
console.log(addProperty(obj, 'mykey'));


// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
// Input:
// removeProperty(obj, “name”);
// Output:
// undefined
console.log('\nWrite a function called “removeProperty”.')
let removeProperty = (obj, key) => { delete obj[key]; return obj[key]};
console.log(removeProperty(obj, 'mykey'));

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
console.log('Count of positive and sum of negative array');
let countPositivesSumNegatives = (...arr) =>{
    let result = [0, 0];
    for(let i of arr) {
        if(Math.sign(i) === -1) result[1]+=i;
        else result[0]+=1;
    }
    return result;
}
console.log(countPositivesSumNegatives(-5, 10, -3, 12, -9, 5, 90, 0, 1));

// Create a function that receives an array of numbers and returns an array containing only the positive numbers
console.log('\nreturns an array containing only the positive numbers');
let getPositives = (...arr) => arr.filter((element)=> Math.sign(element)!==-1);
console.log(getPositives(-5, 10, -3, 12, -9, 5, 90, 0, 1));

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

// n = 0 -> 2⁰ -> [1]

// n = 1 -> 2⁰, 2¹ -> [1,2]

// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]

// Input:
// powersOfTwo(0)
// powersOfTwo(1)
// powersOfTwo(2)
// Output:
// 1
// 1,2
// 1,2,4
console.log('\nWrite a function powersOfTwo');
let powersOfTwo = (num) => {
    let list = [];
    for(let i=0; i<=num; i++) list.push(Math.pow(2, i));
    return list;
}
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));


// Find the maximum number in an array of numbers
console.log('\nFind the maximum number in an array of numbers');
let findMax = (...arr) => Math.max(...arr);
console.log(findMax(-5, 10, -3, 12, -9, 5, 90, 0, 1));


// Print the first 100 prime numbers
console.log('\nPrint the first 100 prime numbers');

let isPrime = (num)=>{
    if(num === 1)return true;
    else if(num === 0) return false;
    else if(num === 2) return true;
    for(let i=2; i<=Math.ceil(num/2); i++){
        if(num%i===0) return false;
        if(i===Math.ceil(num/2)) return true;
    }
}
// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
 var n = 0;
 var i = 2;
 
 while(n < nPrimes) {
    if (isPrime(i)) {
        console.log(n, ' → ', i);
        n++;
    }
    i++;
    }
}
printPrimes();


// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

function printPrimes(nPrimes) {
 var n = 0;
 var i = 2;
 
 while(n < nPrimes) {
    if (isPrime(i)){
    console.log(n+1, '→ ', i);
    n++;
    }
 
    i++;
 }
}
printPrimes(100);// Function prints the first nPrimes numbers


// Reverse a string
console.log('\nReverse a string');
let reverseString = (s) => s.split("").reverse().join("");
console.log(reverseString("JavaScript"));


// Create a function that will merge two arrays and return the result as a new array

console.log('\nmerge two arrays and return the result as a new array');
let mergeArrays = (arr1, arr2) => arr1.concat(arr2);
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// Calculate the sum of numbers received in a comma delimited string
console.log('\nsum of numbers received in a comma delimited string');
let sumCSV = (s) => s.split(",").map(Number).reduce((a, b)=>a+b);
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));


///----------------------outputs------------------------------------
// Given a number, “addFive” returns 5 added to that number.
// 10
// 5
// 0
// 15

// Given a number, return its opposite
// undefined
// undefined
// undefined
// -1
// undefined

// Fill in your code that takes an number minutes and converts it to seconds.
// 300
// 180
// 120

// Create a function that takes a string and returns it as an integer.
// 6
// 1000
// 12

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// 1
// 10
// -2

// Create a function that takes an array and returns the first element.
// 1
// 80
// -500

// Convert Hours into Seconds
// 7200
// 36000
// 86400

// Find the Perimeter of a Rectangle
// 26
// 60
// 22

// Less Than 100?
// true
// false

// remainder of a division operation
// 1
// 3
// -9
// 0

//  Old macdonald had a farm:
// 36
// 22
// 50

// Frames Per Second
// 60
// 600
// 15000

// Check if an Integer is Divisible By Five
// true
// true
// false

// Write a function called “isEven”.
// true
// true
// false
// -1

// Write a function called “areBothOdd”.
// true
// false
// false
// false

// Write a function called “getFullName”.
// 'GUVI GEEK'
// 'GUVI'
// 'GEEK'
// ''

// Write a function called “getLengthOfWord”.
// 4
// 0
// -1
// -1

// Write a function called “isSameLength”.
// true

// distance between two points

// Write a function called “getNthElement”.
// 3

// Write a function called “getLastElement”.
// 4

// Write a function called “getProperty”.
// value
// undefined

// Write a function called “addProperty”.
// { mykey: true }

// Write a function called “removeProperty”.
// undefined
// Count of positive and sum of negative array
// [ 6, -17 ]

// returns an array containing only the positive numbers
// [ 10, 12, 5, 90, 0, 1 ]

// Write a function powersOfTwo
// [ 1 ]
// [ 1, 2 ]
// [ 1, 2, 4 ]

// Find the maximum number in an array of numbers
// 90

// Print the first 100 prime numbers
// 1 →  2
// 2 →  3
// 3 →  5
// 4 →  7
// 5 →  11
// 6 →  13
// 7 →  17
// 8 →  19
// 9 →  23
// 10 →  29
// 11 →  31
// 12 →  37
// 13 →  41
// 14 →  43
// 15 →  47
// 16 →  53
// 17 →  59
// 18 →  61
// 19 →  67
// 20 →  71
// 21 →  73
// 22 →  79
// 23 →  83
// 24 →  89
// 25 →  97
// 26 →  101
// 27 →  103
// 28 →  107
// 29 →  109
// 30 →  113
// 31 →  127
// 32 →  131
// 33 →  137
// 34 →  139
// 35 →  149
// 36 →  151
// 37 →  157
// 38 →  163
// 39 →  167
// 40 →  173
// 41 →  179
// 42 →  181
// 43 →  191
// 44 →  193
// 45 →  197
// 46 →  199
// 47 →  211
// 48 →  223
// 49 →  227
// 50 →  229
// 51 →  233
// 52 →  239
// 53 →  241
// 54 →  251
// 55 →  257
// 56 →  263
// 57 →  269
// 58 →  271
// 59 →  277
// 60 →  281
// 61 →  283
// 62 →  293
// 63 →  307
// 64 →  311
// 65 →  313
// 66 →  317
// 67 →  331
// 68 →  337
// 69 →  347
// 70 →  349
// 71 →  353
// 72 →  359
// 73 →  367
// 74 →  373
// 75 →  379
// 76 →  383
// 77 →  389
// 78 →  397
// 79 →  401
// 80 →  409
// 81 →  419
// 82 →  421
// 83 →  431
// 84 →  433
// 85 →  439
// 86 →  443
// 87 →  449
// 88 →  457
// 89 →  461
// 90 →  463
// 91 →  467
// 92 →  479
// 93 →  487
// 94 →  491
// 95 →  499
// 96 →  503
// 97 →  509
// 98 →  521
// 99 →  523
// 100 →  541

// Reverse a string
// tpircSavaJ

// merge two arrays and return the result as a new array
// [ 1, 2, 3, 4, 5, 6 ]

// sum of numbers received in a comma delimited string
// 57.3