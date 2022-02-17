//Spread Operator:

// const user = {
//     name: "John",
//     age: 30, 
//     address: {
//         city: "New York",
//         state: "New York",
//         country: "USA",
    
//     },
// };

// const admin = {admin: true, ...user};

// console.log(admin);

// console.log(admin.address);


// const obj1 = {a: 1, b: 2};
// const obj2 = {a: 2, c: 3, d: 4};

// const obj3 = {...obj1, ...obj2};

// console.log(obj3);




// const obj1 = {a: 1, b: 2};
// const obj2 = {a: 2, c: 3, d: 4};

// const obj3 = {...obj2, ...obj1}; //here adding obj1 value is the latest

// console.log(obj3);


//using spread operator, we can over come copy by reference problem
// let arr1 = ["apple", "orange", "grapes"];
// let arr2 = [...arr1];
// console.log(arr1);
// arr2.push("mango"); //this will not reflect the original arr1
// console.log(arr2);
// console.log(arr1);




// Rest Parameter:

// should be the last formal parameter

// function to take required element and skip the few
// rest should be the last argument in a function

// function getSum(a, b, c, ...numbers) {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum = sum + numbers[i];
//     }
//     return sum;
// }

// console.log(getSum(1, 2, 3, 4, 5));


// function getSum(...numbers, a, b, c) {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum = sum + numbers[i];
//     }
//     return sum;
// }

// console.log(getSum(1, 2, 3, 4, 5)); //error: Rest parameter must be last formal parameter


// function showColors(color1, color2, ...colorss){
//     console.log(`${colorss}`);

//     console.log(colorss[1]);
//     console.log(colorss[6]);
//     console.log(colorss.length);
//     console.log(colorss.indexOf("pink"));
// }

// showColors("red", "green", "blue", "yellow", "pink", "black");

// function sorting(...arr){
//     let sorted = arr.sort((a, b) => a - b);
//     return sorted;
// }

// console.log(sorting(6, 8, 2 , 5, 9));


//OOPS:

//class and Object

// class Vehicles {}

// //create an object
// var obj = new Vehicles();
// obj.type = "car";
// obj.model = "BMW";
// obj.speed = 100;

// console.log(obj.speed);


// class Vehicle {

//     constructor(type, model){
//         this.type = type;
//         this.model = model;
//     }

//     //method => Instance method
//     getCarProperty(){
//         return `${this.type} ${this.mode}`;
//     }

// }

// var obj = new Vehicle("car", "honda");

// console.log(obj.getCarProperty);


//To access the static method we need to use class name

// class Vehicle {

//     constructor(type, model){
//         this.type = type;
//         this.model = model;
//     }

//     //method => Instance method
//     static getCarProperty(){
//         console.log("I am static method");
//     }

// }

// var obj = new Vehicle("car", "honda");

// console.log(Vehicle.getCarProperty);


// const obj1 = { b: 2, a: 1 };
// const obj2 = { c: 3, d: 4, a: 2 };
// const obj3 = { ...obj2, ...obj1, e: 5 };
// console.log(obj3);

// const user1 = {
//   name: "John",
//   age: 30,
// };

// const user2 = {
//   name: "Kohn",
//   loc: "New York",
// };
// const merged = { ...user1, ...user2 };
// console.log(merged);

