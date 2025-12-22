const string= 'mr red has a red house and red car'; 

const regex = /red/gi; 

const newText = string.replace(regex,'blue'); 

console.log(newText);