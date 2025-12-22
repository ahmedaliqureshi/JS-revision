const person = {
    id:1, 
    name:"john", 
    age:23 
}
const hasKey = "name" in person;
if (hasKey)
{
    console.log('the key eixts');
}
else 
{
    console.log("the key does not exits");
}