// question:- check if the number is armstrong number or not 
//what is arm strong number;- when the sum of the cube of the numebr are equal to a certain number digit by digit 
//eg:- 153-= 1*1*1+5*5*%+3*3*3 

//why:-we need a variable to store the numebr, 
//where:- we need to decalre it at the start of the program 
//what:- usign let key word 
let sum=0;
let  numb = 153; 
console.log(`${numb} is the given numeber`)
let temp=numb;
console.log(`${temp} temp variable stores ${numb}`)

//why:-we need to check if the numebr is greater then 0 or not 
//where:- this will be written after the decalrarion of the variabel 
//what:-we are using while loop with the coditeion to see if the number is gereater or not 
while (temp>0)
{
    //why:-we need to take each digit of the numebr and cube it independently 
    //where:-we need to do it in the while loop, so it can iterate it agian and agian 
    //what-then we are dividing the number by 10 to see if we are getting the 0 or not, this is done till we get 
    //a numebr in 10's
     let remainder = temp%10==0;
     console.log(`${temp} is being devided and solution is ${remainder}`)
    //  console.log(error.message, error.name);
        //but we need a another variable to store the cube of number and sum them 
    sum+= remainder*remainder*remainder; 
    console.log(`${sum} is the sum of cube number`);
    temp= parseInt(temp/10); // taking the float numebr and converting it back to decimal number
    console.log(`${temp} is being exported from here`)
}
if (sum==numb)
{
    console.log(`${numb} is armstrong`);
}
else 
{
    console.log(`${numb} is not armstrong number`);
}