let a=5; 
if(a<0)
{
    console.log(a,"negative number does not have foacotrial")

}
else if (a==0)
{
    console.log(a,"has factorial of 1");
}
else
{
    let fact=1;
    for(let i=1; i<=a;i++)
        fact*=i; //fact= fact*i; 
    console.log(`factorial of ${a} is ${fact}`)
}



































// let a=5; 
// if(a<0)
//     console.log(a,"is less then 0, so factorial is not possibel"); 
// else if (a===0){
//     console.log("the factorial of 0 is 1");
// }
// else{
//     let fact=1; 
//     for(i=1;i<=a;i++)
//     {
//         fact*=i;// fact=fact*i;
//     }
//     console.log(`the factorial of ${a} is ${fact}`);
// }// 