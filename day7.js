
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

        // a. Get all the countries from Asia continent /region using Filter function
        let result = data.filter((country) =>{
            if(country.region === "Asia"){
                return country.name;
            }

        });
        console.log(result);

        //b. Get all the countries with a population of less than 2 lakhs using Filter function
        let getPopulation = data.filter((country) => {
            if(country.population < 200000){
                return country.name;
            }
        });
        console.log(getPopulation);

        //c. Print the following details name, capital, flag using forEach function
        data.forEach((country) => {
        
            console.log(`
            Country Name: ${country.name}

            Country Capital: ${country.capital}

            Country Flag: ${country.flag}
            `)

        });
        

        //d. Print the total population of countries using reduce function
        let TotalPopulation = data.reduce((accumulator, country) => {
            return accumulator + country.population;
        }, 0);

        console.log(`Total Population of Countries: ${TotalPopulation}`);

        //e. Print the country which uses US Dollars as currency
        for(i = 0; i < data.length; i++){
            if(data[i].currencies[0].code === "USD")
            {
                console.log(`
                Country Name: ${data[i].name}
                Currency: ${data[i].currencies[0].code}
                `);
            }
        }
        
    }

    else {
        //If there is any error due to api endpoint or server problem
        //then we will use this else for printing the error
        console.log("Data is not available");
      }
};




