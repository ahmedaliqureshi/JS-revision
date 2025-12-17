let a=10; 
let n1=0,n2=1,nextterm; 
for(let i=1;i<=a;i++)
{
    console.log(n1);
    nextterm=n1+n2; 
    n1=n2; 
    n2=nextterm; 
}