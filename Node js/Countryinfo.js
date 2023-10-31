readinput=require('readline-sync');
arrfunc=require('./ArrayFunctions');
console.log("Enter the country name")
ctryName=readinput.question()

console.log(arrfunc.getCapCity(ctryName));