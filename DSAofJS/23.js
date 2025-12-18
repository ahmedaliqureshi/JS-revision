let hcf; 
const numb1=25; 
const numb2=50; 
for(let i=1;i<=numb1&&i<=numb2;i++)
{
    if(numb1%i==0&&numb2%i==0)
    {
        hcf=i;
    }
}
console.log(hcf);