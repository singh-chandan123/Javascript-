// object is used to store data in key value form 
//creation of object
const animal={
    name:"dog",
color:"black",
age:5,
dog:{
    dog1:'lebradog',
    dog2:'jermanshephard'
}
}

//accessing the object
console.log(animal.color);
console.log(animal.dog.dog1);

//adding new properties on object
animal.strength='running';
console.log(animal.strength);

//deleting the object
delete animal.color;
console.log(animal.color);//gives undefined when access delete item 
