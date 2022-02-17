//Print odd numbers in an array

// let getOddNumbers = function (arr){

//     let result = [];

//     for(let num of arr){

//         if(num % 2 != 0){

//             result.push(num);

//         }
//     }

//     return result;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// console.log(getOddNumbers(arr));


// (
//     function (arr){
//         let result = [];

//         for(let num of arr){

//             if(num % 2 != 0){

//                 result.push(num);

//             }
//         }

//         console.log(result);
//     }
// )([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);


//Convert all the strings to title caps in a string array

// let titleCase = function (arr){
        
//     let res = [];

//     for(let word of arr){

//         res.push(word.split(' ')
//         .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
//         .join(' '));

//     }

//     return res;
            
// }

// console.log(titleCase(["welcome to guvi learning", "hello", "world"]));



// (
//     function (arr){

//         let res = [];

//         for(let word of arr){

//             res.push(word.split(' ')
//             .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
//             .join(' '));

//         }

//     console.log(res);
//     }
// )(["welcome to guvi learning", "hello", "world"]);


//Sum of all numbers in an array

// let getSumOfNumbers = function (arr){

//     let sum = 0;

//     for(let i=0; i<arr.length; i++){

//         sum = sum + arr[i];

//     }

//     return sum;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(getSumOfNumbers(arr));


// (
//     function (arr){

//         let sum = 0;
    
//         for(let i=0; i<arr.length; i++){
    
//             sum = sum + arr[i];
    
//         }
    
//         console.log(sum);
//     }
// )([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Return all the prime numbers in an array

// var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// numArray = numArray.filter((number) => {
//   for (var i = 2; i < number; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });

// console.log(numArray);


// let getPrimeNumbers = function (arr){

//     res = arr.filter((num) => {

//         for(let i = 2; i < num; i++){
//             if(num % i === 0) return false;
//         }
//         return true;

//     });

//     return res;
// }

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(getPrimeNumbers(arr));


// (
//     function (arr){

//         res = arr.filter((num) => {
    
//             for(let i = 2; i < num; i++){
//                 if(num % i === 0) return false;
//             }
//             return true;
    
//         });
    
//         console.log(res); 
//     }
// )([2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Return all the palindromes in an array


// let getPalindrome = function (array){

//     let res = [];

//     for(let i=0; i<array.length; i++){

//         if(array[i] === array[i].split("").reverse().join("")){
//             res.push(array[i]);
//         }
//     }

//     return res;

// }

// console.log(getPalindrome(["MOM", "MADAM", "WOW", "DOG", "HELLO"]));


// (
//     function (array){

//         let res = [];
    
//         for(let i=0; i<array.length; i++){
    
//             if(array[i] === array[i].split("").reverse().join("")){
//                 res.push(array[i]);
//             }
//         }
    
//         console.log(res); 
    
//     }
// )(["MOM", "MADAM", "WOW", "DOG", "HELLO"]);


//Remove duplicates from an array


// let removeDuplicate = function (arr){

//     let uniqueValues = [];

//     arr.forEach(element => {

//         if(!uniqueValues.includes(element)){
//             uniqueValues.push(element);
//         }
        
//     });

//     return uniqueValues;
// }

// console.log(removeDuplicate([1, 2, 1, 2, 3, 4, 3]));



// (
//     function (arr){

//         let uniqueValues = [];
    
//         arr.forEach(element => {
    
//             if(!uniqueValues.includes(element)){
//                 uniqueValues.push(element);
//             }
            
//         });
    
//         console.log(uniqueValues);
//     }
// )([1, 2, 1, 2, 3, 4, 3]);


//Rotate an array by k times

// let rotateArray = function (arr, k){

//     for(let i=0; i<k; i++){

//         arr.unshift(arr.pop());
//     }
//     return arr;
// }

// let arr = [1, 2, 3, 4, 5];

// console.log(rotateArray(arr, 3));


// (
//     function (arr, k){

//         for(let i=0; i<k; i++){
    
//             arr.unshift(arr.pop());
//         }
//         console.log(arr);
//     }
// )([1, 2, 3, 4, 5], 3);


//Arrow function programs:
//Print odd numbers in an array


// let getOddNumbers = (arr) => {

//     let result = [];

//     for(let num of arr){

//         if(num % 2 !== 0){

//             result.push(num);
            
//         }
//     }

//     return result;
// }

// console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



//Convert all the strings to title caps in a string array

// let titleCase = (arr) => {

//     let res = [];

//     for(let word of arr){

//         res.push(word.split(' ')
//         .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
//         .join(' '));

//     }

//     return res;

// }
        
// console.log(titleCase(["welcome to guvi learning", "hello", "world"]));   
            
// let getSumOfNumbers = (arr) => {

//     let sum = 0;

//     for(let i=0; i<arr.length; i++){

//         sum = sum + arr[i];

//     }

//     return sum;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(getSumOfNumbers(arr));



// let getPalindrome = (array) => {

//     let res = [];

//     for(let i=0; i<array.length; i++){

//         if(array[i] === array[i].split("").reverse().join("")){
//             res.push(array[i]);
//         }
//     }

//     return res;

// }

// console.log(getPalindrome(["MOM", "MADAM", "WOW", "DOG", "HELLO"]));


//Return median of two sorted arrays of the same size

// let getMedian = function (arr, middle){

//     let avg = ( arr[middle -1 ] + arr[middle] ) / 2;

//     return avg;
    
// }

// let arr1 = [1, 12, 15, 26, 38];
// let arr2 = [2, 13, 17, 30, 45];

// let mergedArray = arr1.concat(arr2);

// //Arrow function to sort the array
// mergedArray.sort((a, b) => a - b);

// middle = mergedArray.length / 2;

// console.log(getMedian(mergedArray, middle));


//IIFE

// let arr1 = [1, 12, 15, 26, 38];
// let arr2 = [2, 13, 17, 30, 45];

// let mergedArray = arr1.concat(arr2);

// //Arrow function to sort the array
// mergedArray.sort((a, b) => a - b);

// middle = mergedArray.length / 2;

// (
//     function (arr, middle){

//         let avg = ( arr[middle -1 ] + arr[middle] ) / 2;
    
//         console.log(avg);
        
//     }

// )(mergedArray, middle);
