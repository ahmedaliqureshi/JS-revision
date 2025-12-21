function capitalizeFirstLetter(str){
    const capitalized = str.charAt(0).toUpperCase()+str.slice(1);
    return capitalized;
}
const string = "this is the string was made possible be vscode"; 

const result = capitalizeFirstLetter(string); 
console.log(result);