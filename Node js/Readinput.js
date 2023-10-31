readinput=require('readline-sync');
arrfunc=require('./ArrayFunctions');

console.log("enter your name:")
firstname=readinput.question()
console.log("Enter your age:")
age=Number(readinput.question())
console.log("Enter the country name")
ctryName=readinput.question()
console.log(arrfunc.getCapCity(ctryName))

if(age>=18 && age<=45)
    console.log("You are eligible for gratuity")
    
else
    console.log("Apply for gratuity consideration")



