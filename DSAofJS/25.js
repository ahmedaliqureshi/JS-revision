//why;- we are declaring a variable and assigning it a vlaue, here we are taking  10
//where:- we are doing this at the start of the program so the variable can be used later on 
//what- we are using let key word to declare the varaible and variable name is numb
let numb=10; 
//why- we decalring a for loop in whcih we are declaring a i variable, and initialising it to 0, then 
//the value of the i goes on till the numebr which we have given erlier which is 10
//where- the for loop is declared and used right after the declaration of the i with in the for loop 
//what- for loop will help us to interate throug the numebr one by one util it reaches the result 
for(let i=0;i<=numb;i++)
{
    console.log(numb,"numb is taken form the declaration"); // to show that number is stored or not in the loop
    if(numb%i==0) //number are getting divided constiniouly by the i till it reaches zero
    {
         console.log("the factors of the given number are the",i);
    }
}