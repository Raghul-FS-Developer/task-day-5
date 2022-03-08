// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array

console.log('Odd numbers in Array');
(
    (...numbers)=>{
        for(let i of numbers)
            if(i%2!==0) console.log(i);
    }
)(3, 4, 7, 9, 6, 8, 10);

// Convert all the strings to title caps in a string array

console.log('\nConvert all the strings to title caps in a string array');
((...strings)=>{
        for(let i of strings) console.log(i.toUpperCase());
    }
)('string1', 'string2', 'string3');


// Sum of all numbers in an array
console.log('\nSum of all numbers in an array');
((...numbers)=>{
        console.log(numbers.reduce((a, b)=>a+b));
    }
)(2, 4, 5, 7);


// Return all the prime numbers in an array
console.log('\nReturn all the prime numbers in an array');
let isPrime = (num)=>{
    if(num === 1)return true;
    else if(num === 0) return false;
    else if(num === 2) return true;
    for(let i=2; i<=Math.ceil(num/2); i++){
        if(num%i===0) return false;
        if(i===Math.ceil(num/2)) return true;
    }
}

(
    (...numbers)=>{
        for(let i of numbers) if(isPrime(i)) console.log(i);
    }
)(2, 3, 4, 1, 0)

// Return all the palindromes in an array
console.log('\nReturn all the palindromes in an array');
let isPalindrome = (string) => {
    if(string.split("").reverse().join("") === string) return true;
    else return false;
}

(
    (...strings)=>{
        for(let i of strings) if(isPalindrome(i)) console.log(i);
    }
)('MOM', 'MADAM', 'GUVI');


// Return median of two sorted arrays of same size
console.log('\nReturn median of two sorted arrays of same size');
(
    (arr1, arr2)=>{
        let sortedArray = arr1.concat(arr2).sort((a, b)=> a - b);
        let median = ((sortedArray[sortedArray.length/2]) + (sortedArray[(sortedArray.length/2)+1])/2);
        console.log(median);
    }
)([9, 4, 1], [3, 5, 6]);


// Remove duplicates from an array
console.log('\nRemove duplicates from an array');
(
    (...arr)=>{
        console.log(Array.from(new Set(arr)));
    }
)(3, 3, 3, 4, 4, 5, 6);


// Rotate an array by k times
console.log('\nRotate an array by k times');
(
    (k, ...arr)=>{
        console.log(arr.slice((arr.length-k)).concat(arr.slice(0, (arr.length-k))));
    }
)(1, 1, 2, 3, 4);

///-------------------output----------------------------
// Odd numbers in Array
// 3
// 7
// 9

// Convert all the strings to title caps in a string array
// STRING1
// STRING2
// STRING3

// Sum of all numbers in an array
// 18

// Return all the prime numbers in an array
// 2
// 3
// 1

// Return all the palindromes in an array
// MOM
// MADAM

// Return median of two sorted arrays of same size
// 8

// Remove duplicates from an array
// [ 3, 4, 5, 6 ]

// Rotate an array by k times
// [ 4, 1, 2, 3 ]

