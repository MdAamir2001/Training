var io=require('fs');

// io.readFile('data.txt','utf8',function(err,lines){
//     console.log(lines);
//     console.log('read ' +lines.length+ ' bytes from file');
// });

// CALL BACK FUNCTION


function displayData(err,lines)
{
    console.log(lines);
    console.log('read ' +lines.length+ ' bytes from file');
}
io.readFile('data.txt','utf8',displayData);