var express = require('express');

var my_sql=require('mysql');

var bparse = require('body-parser');

var expen = express();

//var mysqlconn=my_sql();

expen.use(bparse.urlencoded({ extended: false }));

var proc = require('process');

var path = require('path');

var visitorCount = 0;

 

var mysql_conn= my_sql.createConnection({host:'localhost',port:3306,user:'root',password:'Aamir@489', database:'world'});

mysql_conn.connect();

console.log("connected to database...");

console.log(mysql_conn.statistics());

console.log(mysql_conn.state)

 

function processResults(error, results)

{

    //console.log(results);

    for(i in results)

    {

        console.log(JSON.stringify(results[i]));

    }

}

 

expen.post('/signin', authenticate)

function authenticate(request, response) {

    console.log("Authenticating..");

    mysql_conn.query('SELECT * from users',processResults);

 

 

    /*var uname = request.body.UserID;

    var upwd = request.body.password;

    var result = false;

 

    for (i in users) {

        if (uname == users[i].username && upwd == users[i].password){

            result = true;

        break;}

    }

 

    if (result == true)

        response.send("<b> You are authenticated...</b>");

    else

        response.send("<b> Invalid user name / password..</b><br><a href='/login'>Retry login</a>");

 

}*/

}

expen.post("/addUser",addNewUser)

function addNewUser(request, response)

{

    var uid=request.body.userID;

    var upwd=request.body.password;

    var uemail=request.body.email;

    var ins="insert into users values('" +uid + "','"+ upwd +"','" +uemail +"'))";

    console.log('Executing -' +ins);

    mysql_conn.query(ins);

    console.log("Inserted 1 record into the database..");

}

 

 

expen.listen(proc.argv[2], "localhost"); //wait for the incoming req (GET,POST,PUT,UPDATE,TRACE etc..)

console.log("Started the server at port : " + proc.argv[2]);

 

 

has context menu