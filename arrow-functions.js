// Do the below programs in arrow functions
// Print odd numbers in an array
console.log('Odd numbers in Array');
let oddNumbersInArray = (...numbers)=>{
        for(let i of numbers)
            if(i%2!==0) console.log(i);
    }
oddNumbersInArray(3, 4, 7, 9, 6, 8, 10);


// Convert all the strings to title caps in a string array
console.log('\nConvert all the strings to title caps in a string array');
let titleCaps = (...strings)=>{
        for(let i of strings) console.log(i.toUpperCase());
    }
titleCaps('string1', 'string2', 'string3');


// Sum of all numbers in an array
console.log('\nSum of all numbers in an array');
let sumOfArray = (...numbers)=>{
        console.log(numbers.reduce((a, b)=>a+b));
    }
sumOfArray(2, 4, 5, 7);

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

let primeNumbersInArray = (...numbers)=> {for(let i of numbers) if(isPrime(i)) console.log(i)};
primeNumbersInArray(2, 3, 4, 1, 0);


// Return all the palindromes in an array
console.log('\nReturn all the palindromes in an array');
let isPalindrome = (string) => {
    if(string.split("").reverse().join("") === string) return true;
    else return false;
}

let palindromesInArray = (...strings)=>{for(let i of strings) if(isPalindrome(i)) console.log(i)};
palindromesInArray('MOM', 'MADAM', 'GUVI');

/// -----------------------output=----------------------
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