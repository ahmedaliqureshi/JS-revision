//why- make a function with name of rnumb
//where- at start of program 
//what- use of function key word to make fucntion 
function rnumb(){
    //why- we need to generate a random number, to do that we will use 
    // Math.random() to generate it and Math.floor() to make the the numbe whole
    //where- at 1st lines inside or function 
    //what- use of let varibale, and math floor and random 

    let random= Math.floor(Math.random()*10)+1;


    //why- then we need to take input, so we can compare it with the math.random and number given
    //where- after math.random is made
    //what- using let method to take the number

    let numb;

    if(numb!==random)
        console.log(`${random} you guessed a right number`);
    else
    {
        console.log(`${random} you did not gussed a right number`);
    }
}
rnumb(10);