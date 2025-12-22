const person={
    name:'peter', 
    age:26
}
const student= {
    gender:'male'
}

const newObj= Object.assign(person, student); 
console.log(newObj);