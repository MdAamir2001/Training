
function test(){
    console.log("In test");
}

console.log(test);
console.log(test());

var multiply=new Function("p1,p2","console.log(p1*p2);return p1*p2;");
console.log("Mutiply: "+ multiply);

multiply(100,200);
v=add(100,30);
console.log("V:" +v);
console.log(add);