let name="chandan Singh chandu";

// length
console.log(name.length);

//convert to uppercase
console.log(name.toUpperCase());

// to lowercase
console.log(name.toLowerCase());

//slice of string 
let name_1='anmol anmol';
console.log(name_1.slice(1,3));//string is immutable means it doesnot change always return new string
console.log(name_1.slice(1));

//replace 
let newname=name.replace('chan','brijnan');
console.log(newname);
//replaceall replace all instances of substring with another substring
console.log(name.replaceAll('chan','brijnan')); 

//concat method which join two string
let animal='dog';
console.log(animal.concat('cat'));
//we can also do by simply + sign
console.log(animal+ " is the bravest and "+" trustworthy "+animal);

// trim method used to remove spaces
let color='  black';
console.log(color.trim());

//for loop to print string
let len=color.length;
for(let i=0;i<len;i++){
    console.log(color[i]);
}



