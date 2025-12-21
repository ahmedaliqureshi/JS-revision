//why:- decalre one var for storing the sum of numb
//where- start of program 
//what- using let declaration 

// let number=10;

//why-declare a function with the name sum and pass a parameter with number
//where- after delaration of the numb varaiable
//what- using function key word to make the fucntion 

function sum (numb){
    // console.log(`${numb} is taken for if else checking`)
    //why- we need to check if the numb is greater then 0 
    //if not then it will be waste to add them up 
    //where- this will be 1st thing declared in the function as if else condition 
    //what- using the if else condtion to see if the number is greater then 0 ot not 
    if (numb>0)
    {
             //why-we need to take the number and then add with sum, the sum helps in keeping the history of the addition 
             //where- it will be written in the if condition 
             //what- using the variable of number and sum 

             return numb+sum(numb-1); // number will be added with sum, at 1st 0+10, then 10+9, then 10+9+8.. then so on         
    }
    else{
        // console.log(`${numb}`);
        // return numb;
    }
}
//why- we need to call the function so we will just type its name that will call the fucntion, and store it in a variable to print it
//where- at the end of the function block 
//what- calling the fucntion 

let result = sum(10);
console.log(result);



// program to find the sum of natural numbers using recursion

// function sum(num) {
//     if(num > 0) {
//         return num + sum(num - 1);
//     }
//     else {
//         return num;
//     }
//  }

// // take input from the user
// const number = 10;

// const result = sum(number);

// // display the result
// console.log(`The sum is ${result}`);