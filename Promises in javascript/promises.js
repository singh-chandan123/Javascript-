//create promises

const promise1=new Promise(function(resolve,reject){  // promise takes two argument resolve and reject
    setTimeout(function(){
console.log("this is chandan sigh");
resolve();
    },1000);
})
promise1.then(function(){
    console.log("first promises resolve");
}) 

//create promises which is not resolve
const secondpromise=new Promise(function(resolve,reject){
    const num=3;
    if(num%2==0){
        console.log("divide so resolve");
        resolve();
    }
    else{
        console.log("not divide so not resolve");
        reject();
    }
})
secondpromise.then(function(){
    console.log("resolve");
})
.catch(function(){
    console.log("not resolve");
})

//create a promise where we can read a data from database
const thirdpromise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("third promise");
        resolve({  username:"chandan singh " ,class:"btech cse 4 year"   } )          
    },1000)
})
thirdpromise.then(function(user){
   console.log(user.username);
})

const fourthpromise=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true;
    if(error==true){
        reject("error is present");
    }
    else{
        resolve({name:"chandan",password:123})
    }
  },1000);
})
fourthpromise.then(function(pass){
    console.log(pass.password);
})
.catch(function(){
    console.log("reject run ");
})

//use of asyn  and await without then and catch
const fifthpromise=new Promise(function(resolve,reject){
    const number=13;
    if(number%2==0){
        resolve({name:"javascript",password:123234})
    }
    else{
        reject("it is rejected as not divide ");
    }
})

async function ans(){
    //if ans comes wrong or reject then it will give error so put in try and catch block
    try {
        const newans= await fifthpromise;
        console.log(newans);  //{ name: 'javascript', password: 123234 } 
    } catch (error) {
      console.log("error generated as not even number ");  
    }

}
ans();

//now fetch a data by using then and catch
const fetchurl=fetch('https://jsonplaceholder.typicode.com/users');
fetchurl.then((response)=>{
return response.json();
})
.then((data)=>{
console.log(data);
})
.catch((err)=>{
    console.log("error is present:");
})

