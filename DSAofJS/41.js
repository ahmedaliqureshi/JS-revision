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

delete person.score; 

console.log(person);