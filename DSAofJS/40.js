function count(){

    const count = str.match(/[aeious]/gi).length; 
    return count; 
}
const str = 'the string will be legendary'; 
const result = count (str)