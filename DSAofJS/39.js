function count(str,letter){
    let count=0; 
    for (let i=0; i<str.length;i++)
    {
        if (str.charAt(i)==letter){
            count+=1;
        }
    }
    return count;
}
const string = "letter"; 
const check= "l";
const result = count(string,check); 
console.log(result);