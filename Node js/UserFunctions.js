readinput=require ('readline-sync')



function validate(empname,empage){
    if(empname.length<5)
    console.log("Length must be a minimum of 5 characters");
    if(empage<18)
    console.log(" You should grow a little higher");
}

function callValidate(){
    console.log("Enter your name: ");
    empname=readinput.question()
    console.log("Enter your age: ");
    empage=Number(readinput.question())
    validate(empage,empname)
}
callValidate(validate);