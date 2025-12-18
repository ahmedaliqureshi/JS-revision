//to check the number as same last digit or not 
let a=12334234234; 
let b=12323432143; 

let result1=a%10; 
let result2=b%10;

if (result1==result2)
{
    console.log(` last digit of ${result1} and ${result2} are same `);
}
else 
{
    console.log(`they are not same`)
}

