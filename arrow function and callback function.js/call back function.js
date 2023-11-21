const operation=(a,b,operator)=>{
return  operator(a,b);
}
// 1st way
const add=operation(3,4,function(a,b){
    return a+b;
})
console.log(add);  //7

//2nd way
const mul=operation(3,5,(a,b)=>{
    return a*b;
})
console.log(mul);  //15



