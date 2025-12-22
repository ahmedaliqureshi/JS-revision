const person={
    name:"john", 
    age:21,
}
const clonePerson= Object.assign({},person); 
console.log(clonePerson);
clonePerson.name= 'peter'; 
console.log(clonePerson); 
console.log(person.name)