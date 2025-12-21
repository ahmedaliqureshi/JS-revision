const person= {
    name:"john", 
    age:20, 
    hobbies:['reading',"coding","excerises"],
    greet:function() {
        console.log('hello CFI');
    },
    score:{
        express:9, 
        JS:8,
    }
};
console.log(typeof person); 

console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.express);