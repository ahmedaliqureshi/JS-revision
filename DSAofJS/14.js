let ll=1; 
let hl=50; 
for(let i=ll;i<=hl;i++)
    {
    let flag=0;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag=1;
            break;
        }
    }
    if(i>1&&flag==0)
        console.log(i,"is the prime number");
}