//operator 
let a=13;
let b=3;
//arithmetic operator
console.log('sum of a+b is',a+b);
console.log('sum of a%b is',a-b);
console.log('sum of a-b is',a*b);
console.log('sum of a*b is',a/b);//it give ans in points unlike only integer parts
console.log('sum of a/b is',a**b);//used to calculate  power 
console.log('sum of a%b is',a%b);//gives remainder

// increment operator
a=12;
console.log(a++);//first print 12 then increment
console.log(a);//13
// decrement
console.log(a--);//13
console.log(a);//12

//comparison operator 
let num=10;
let num1='10';
console.log(num==num1);//gives true
console.log(num===num1);//it gives false as one is in int and another in string

//logical operator 
// and
a=10;
b=12;
if(a<12&&b==12){
    console.log('true');//here both condition should be true
}
else{
    console.log('false');
}
//or
if(a>b||a===10){
    console.log('true');  //return true as one condition is write 
}
else{
    console.log('false');
}

//ternary operator
const c=(a>b)?'true':'false'
console.log(c);//return false