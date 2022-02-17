//Inheritance:

// class person{
//     static CompanyName="Amazon";//static MEMBERs
//     constructor(name,age,city){
//       //set the values for 3 properties
//       this.name=name;
//       this.age=age;
//       this.city=city;
//     }
  
//     //instance methods 
//     getData(){
//       let personData=`
//       Name: ${this.name}  
//       Age: ${this.age}
//       City: ${this.city} 
//       `;
//       console.log(personData);
//     }
  
//     //static methods=can be accessed with the help of the class 
//     static getCompanyName(){
//       console.log(person.CompanyName);
  
//     }
  
//   }
  
//   class Employee extends person{
//     static companynew="Google";
//     constructor(name,age,city,Designation,salary){
//       super(name,age,city);
//       this.Designation=Designation;
//       this.salary=salary;
//     }
  
//     //instance method
//     getData(){
//       let employeeData=`
//       Name: ${this.name}  
//       Age: ${this.age}
//       City: ${this.city} 
//       Designation: ${this.Designation}
//       Salary: ${this.salary}
//       `;
//       console.log(employeeData);
//     }
  
//     //static method
//     static getCompanyName(){
//       console.log(person.CompanyName);
//       console.log(Employee.companynew);
//     }
  
//   }
  
  
//   //create an object for employee class 
//   let employee1=new Employee("Jack","52","Chennai","Mern Development","30lacs");
  
//   employee1.getData();//accessing of instance method
//   Employee.getCompanyName();//accessing of static method
  
//   //create an object for Person class
//   let person1=new person("John","22","Delhi");
//   person1.getData()
//   person.getCompanyName();//accessing of static method



  // Polymorphism
// Poly+Morphism=>
// Tea=>
// Using the same method , we can work on 2 different objects 
// Your class must be inherited 
// class Car {
//     drive(){
//   console.log("This is Car method and it run slowly");
//     }
  
//   }
  
//   class Motorcycle extends Car{
//   drive(){
//   console.log("This is Motorcycle method and it run fast");
//   }
//   }
  
//   //create an object of motorcycle
//   let motorbike=new Motorcycle();
//   motorbike.drive();
  
//   let car1=new Car();
//   car1.drive();
  
  
  // Encapsulation:
  // Wrapping or binding of data into a single unit 
  // getter->get or read the values 
  // setter=>used to set the values
  
  
  // Netbanking 
//   class Car{
  
//     setter(model,year,color){
//       this.model=model;
//       this.year=year;
//       this.color=color;
  
//     }
  
//     getter(){
//       return `${this.model} ${this.year} ${this.color}`;
  
//     }
  
//   }
  
  
//   let car1=new Car();
//   car1.setter("Audi","2018","red");
//   console.log(car1.getter());



// var employees=[
//     {
//       id:101,
//       name:"John",
//      Designation:"FSD",
//      yearsofexp:5
  
//     },
//     {
//       id:102,
//       name:"Raj",
//       Designation:"SDE-2",
//       yearsofexp:5
//     },
//     {
//       id:103,
//       name:"Raju",  
//       Designation:"SDE-1",
//       yearsofexp:6
//     }
//   ,
//     {
//       id:104,
//       name:"Rajesh",
//       Designation:"SDE-3",
//       yearsofexp:7
//     }
//   ]
  
  // o/p=101,102,103,104,105
  // let employeeid=[];
  // employees.forEach(function(employee){
  //   employeeid.push(employee.id);
  // })
  // console.log(employeeid);
  
  
  // 1.Map=>
//   let employeeid=employees.map((employee)=>{
//     return employee.id;
//   })
//   console.log(employeeid);
  
//   let name=employees.map((employee)=>{
//     return employee.name;
//   })
//   console.log(name);
  
  //Reduce=>reduce a group of element to a single digit 
//   let TotalYearofExp=employees.reduce((accumulator, employee)=>{
//     return accumulator+employee.yearsofexp;
//   },1)
  
//   console.log(TotalYearofExp);
  
  
  // filter=>
//   let data=employees.filter((employee)=>{
//     if(employee.yearsofexp===5){
//       return employee.name;
//     }
    
//   })
//   console.log(data);
  
  // Map,reduce,
//   Map=>
  // Additional  Session 
  // 1.Recap=>
  // 2.Git+Github and Netlify