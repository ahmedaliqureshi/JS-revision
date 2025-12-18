// sum of natural number

//why:- to calculate the sum of the natural number, we will be needing 
//to set a limit of start and end 
//where:- at the start of the program
//what;- we are going to use snumb as starting number and enum for the last digit 
let snumb=2; 
let enumb=10; 

//why:-now we need to use for loop to add up all the numbers from the start to end
//where:- this will be written after devclartion of vareiables 
//what:- we are going to use for loop with the start of the i 2 and limit till 10
for (let i=1;i<=10;i++)
{
    let sum; // declaring a varibale to store the sum 
    sum = snumb+i; // suming all the natrual number
    console.log(sum); //printing the sum 
}