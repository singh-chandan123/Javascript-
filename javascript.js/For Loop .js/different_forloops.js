
const num=[1,4,6,7,3,9];
//normal for loops
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}
console.log();
//for each loops
num.forEach(foreachloop);  //callback function
function foreachloop(item){
    console.log(item);//print each num value
}
num.forEach(foreachloop2);

function foreachloop2(arr , index ){
    console.log(index);//print each num index
}

//for in function -> used to print key or acess the value 
for(let a in num ){
    console.log(a +' index value is '+num[a]);
}
console.log();//for line
//for of loops used to print value 
for(let a of num){
    console.log(a);
}

