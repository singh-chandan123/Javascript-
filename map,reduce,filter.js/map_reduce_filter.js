let array=[34,56,78,2,65];
//map function->reduce new array same as for each loop
// using variable fuction
 let a=array.map(arr1);
function arr1(element){
return element;
}
console.log(a);//print element 

//not using variable function
let b=array.map((value,index,arr)=>{
  return index;
})
console.log(b);//print index


//filter function =>use to filter in array and it return new array
let arr2=[3,56, 89,10,23,2,1,8];
let newval= arr2.filter((value)=>{
if(value<=10){
    return value;
}
})
console.log(newval);

//reduce method
let arr3=[1,3,5,6,8];
let new_arr=arr3.reduce((num1,num2,val)=>{
return num1+num2-val;
})
console.log(new_arr);


