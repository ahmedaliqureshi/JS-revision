let a=3; 
let b=5; 
c=2; 

if((a||b||c)==0)
{
    console.log("given number are zero, the roots will be imaginary"); 
}
else 
{
console.log('the solution of the above number are:')
let x= -b+Math.sqrt(b*b-4*a*c)/2*a;
let y= -b-Math.sqrt(b*b-4*a*c)/2*a;
console.log(x); 
console.log(y);
}