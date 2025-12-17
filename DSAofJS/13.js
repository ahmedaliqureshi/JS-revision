// let a = 3; 
// if(a==1||0)
// {
//     console.log(a,"is not a prime numebr");
// }
// else if (a>1||0)
// {
//     for(i=2||3||5||7;i<=a/2;i++)
//     {
//           if(a/i==0)
//           {
//             console.log(a,"is not a prime numebr");
//           }
//           break;
//     }
// }
// else 
// {
//     console.log(a,"is a prime number");
// }



let numb=2; 
let isprime=true; 

if(numb==1||0)
{
    console.log(numb,"is not a prime number");
}
else if (numb>1||0)
{
    for (i=2;i<=numb/2;i++)
    {
        if(a/i==0)
        {
            console.log (a,"is not a prime numebr");
        }
        isprime=false;
        break;
    }
}
if(isprime)
{
    console.log(numb,"is a prime numeber");
}
else{
    console.log(numb,"is not a prime number");
}
