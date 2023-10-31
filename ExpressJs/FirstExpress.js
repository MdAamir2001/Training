var exp=require('express');//import expressjs into the application
var expenv=exp();//initialize the environment for express js app
var path=require('path');
var visitorCount=0;
expenv.get('/',Welcome)//when the client sends the get request with a url ending with "\", then the welcome function must be called.

function Welcome(request,response){
    var str="<html><body>";
    str+="<b>First website in express</b><br>";
    visitorCount++;
    str+="<b>You are a visitor#</b><br>" + visitorCount + "<br>";
    var today=new Date();
    str+="<b>Today: </b>" + today + "<br>";
    str+="<br><a href='/login'>Click to login</a>";
    str+="</body></html>"
    response.send(str);
}

expenv.get('/signin',authenticate)

function authenticate(request,response)
{
    console.log("Authenticating!!!");
    validid="Tiger Muthuvel Pandian";
    validpwd="HUKUM@2023";

    var uname=request.query.UserId;
    var pwd=request.query.password;

    if (uname==validid && pwd==validpwd)

        response.send("<b>  welcome....You are Authenticated!</b>");
    else
    response.send("<b>veliya jaao!! invalid username or password</b><br><a href='/login'>Retry logging in</a>");
}



expenv.listen(7800,"localhost");
expenv.get('/login',loginForm);

function loginForm(request,response){
    console.log("Displaying login form");
    //response.sendFile(path.join(__dirname, '/loginform.html')); // sendFile is a built in 
    //function.
    response.sendFile(__dirname + '/loginform.html'); // sendFile is a built in 
}
