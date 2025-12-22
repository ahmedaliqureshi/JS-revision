function checkStr(str){
    if (str.startsWith("S"||"s")&&str.endsWith("G"||"g"))
    console.log("the string starts with S and ends with G"); 
    else
    console.log("the string does not start or ends with s and g");
}
str="string"
let result = checkStr(str); 
console.log(result);