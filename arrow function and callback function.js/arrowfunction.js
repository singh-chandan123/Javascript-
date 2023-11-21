//without arrow function
function greet(num){
for(let i=0;i<num;i++){
    console.log("greeting to all");
}
}
//function calling
greet(5);
console.log();

//arrow function 1st method
const ans=(num)=>{
    for(let i=0;i<num;i++){
        console.log("greeting to all");
    } 
}
//function calling
ans(3);
//2nd method
const out=(num)=>num*num;
console.log(out(4));

//3rd method
const output =(num)=>{
    return num*num;
}
console.log(output(5));