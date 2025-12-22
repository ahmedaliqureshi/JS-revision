const student= {
    name:'xyz', 
    age:20, 
    habbies:['reading','coding','building'],
}; 
for (let key in student){
    let value;
    value= student[key];
    console.log(key+"-"+value);
}