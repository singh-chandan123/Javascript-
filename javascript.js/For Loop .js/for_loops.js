//for loop 
let sum=0;
for(let i=0;i<10;i++){
sum+=i;
}
console.log(sum);//45

//factorial using for loop
let fact=1;
for(let i=0;i<10;i++){
    if(i===0){
        fact=1;
    }
    else{
        fact=fact*i;
    }

}
console.log(fact);//362880

//for in loops
//create object for demonstrating for in loops
// used to print key as well as value  of objects
const obj={
    chandan:50,
    vishal:40,
    ankit:20,
}
for(let a in obj){
    console.log('marks of each students namely '+ a + ' is ' + obj[a]);
}

//for of loop used on iteration ,used to print value of key
let name='javascript';
for(let a of name){
    console.log(a);//print each letter in different lines
}

//while loop
//first check condition then print 
const b=13;
let i=0;
while(i<b){
   console.log(i);  //print all number from 0 to 12 in separate line
    i++;
}

//do while loop --> first print then check condition
let a=10;
do{
    console.log(a);
    a++;
}
while(a<15);

