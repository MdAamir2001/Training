var exp = require('express');
var proc = require('process');
var bparser = require('body-parser');
var expenv = exp();
var path = require('path');

expenv.use(bparser.urlencoded({ extended: false }));

var visitorCount = 0;

expenv.get('/', Welcome);

function Welcome(request, response) {
    var str = "<html><body>";
    str += "<b>First website in express</b><br>";
    visitorCount++;
    str += "<b>You are a visitor#</b><br>" + visitorCount + "<br>";
    var today = new Date();
    str += "<b>Today: </b>" + today + "<br>";
    str += "<br><a href='/login'>Click to login</a>";
    str += "</body></html>";
    response.send(str);
}

expenv.post('/signin', authenticate);

function authenticate(request, response) {
    console.log("Authenticating!!!");

    var users = [
        { username: 'soona', password: 'paana' },
        { username: 'varma', password: '002' },
        { username: 'kaamana', password: '003' },
        { username: 'sangeet', password: 'badawa' }
    ];

    var uname = request.body.UserId;
    var pwd = request.body.password;
    var authenticated = false;

    for (var i in users) {
        if (uname == users[i].username && pwd == users[i].password) {
            authenticated = true;
            break;
        }
    }

    if (authenticated) {
        response.send("<b>  welcome....You are Authenticated!</b>");
    } else {
        response.send("<b>veliya jaao!! invalid username or password</b><br><a href='/login'>Retry logging in</a>");
    }
}

expenv.listen(proc.argv[2], "localhost");
console.log("Started the port number" + proc.argv[2]);

expenv.get('/login', loginForm);

function loginForm(request, response) {
    console.log("Displaying login form");
    response.sendFile(__dirname + '/loginform.html');
}
