const student={
    name:'SG', 
    age:20, 
    hobbies:['reading','coding'],
}
let count=0; 
for (let key in student)
{
    ++count;
}
console.log(count);