// optionalchaining is used to remove error.basically if value is present then it will give  ans otherwise give undefined ans 
// it is used in object and array 

// use in object 
const add={
    country:'india',
    state:'UP',
    city:'raebareli',
address:{
    block:'dalmau',
    vill:"santpur"
},
};

// console.log(add.address.housenumber.house);//give error as their is no house in housenumber
console.log(add.address.house?.housenumber);

//use in array
const arr=[
   {names:'chandan'},
  {class:'btech'}

]
console.log(arr[2]?.class);