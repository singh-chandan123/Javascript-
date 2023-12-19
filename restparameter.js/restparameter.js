// restparameter-> it is used to join all string ,number unlike spread which break each number ,string. 
//here we use ... to pass ask as formal parameter
// example of finding sum of lots of numbers
function sum(...numbers){ //here it takes any numbers of parameters
    let total=0;
   for(let a of numbers){
    total=total+a;
   }
   return total;


}
//function call
const total=sum(1,2,3,4,5,6,215);
console.log(total);

//example for joing lots of strings
function joinstring(...strings){
//    console.log(...strings);//give all name in the array form
console.log(strings.join(' ')); //chandan singh thakur

}
//function call
 joinstring('chandan','singh','thakur');

