// import { isEqual } from 'lodash';

// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };

//using Javascript stringigy method

// if(JSON.stringify(obj1) === JSON.stringify(obj2)){

//     console.log("Both are equal");

// }
// else{

//     console.log("Both are not equal");

// }


//using key length same

// var flag = false;

// if(Object.keys(obj1).length === Object.keys(obj2).length){
//     for(key in obj1){
//         if(obj1[key] === obj2[key]){

//             flag = true;
        
//         }
//         else{
//             flag = false;
//             break;
//         }
//     }
// }

// console.log(`is both are equal: ${flag}`);


//using Lodash method

// let flag = false;

// flag = isEqual(obj1, obj2);

// console.log(`is both are equal: ${flag}`);




//create xml http request

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

//add a listener to process the request

xhr.onload = function (){

    //process the request and server will return the data
    if(xhr.status >= 200 && xhr.status < 300){

        //convert the raw data to js notation
        var data = JSON.parse(xhr.response);

        for(var i=0; i<data.length; i++){
            var country = data[i];
            console.log(`
            Country Name: ${country.name}

            Country Region: ${country.region}

            Country Sub Region: ${country.subregion}
            
            Country Population: ${country.population}
            `)
        }
    }

    else {
        //If there is any error due to api enpoint or server problem
        //then we will use this else for printing the error
        console.log("Data is not available");
      }
};