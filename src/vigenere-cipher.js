const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


  constructor(notRerverse){
    this.characters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    this.notRerverse=notRerverse;
    if(this.notRerverse === 'undefined') this.notRerverse =true;
  }
  
  encrypt(message,key) {
    let input = message.toUpperCase() ;
    keyword = key.toUpperCase() ;
 
    let result = "";
 
    let keyword_index = 0;
 
    for(let i=0; i<input.length;i++)
    {
        let c = (Array.IndexOf(characters, input[i]) +
            Array.IndexOf(characters, keyword[keyword_index])) % N;
 
        result += characters[c];
 
        keyword_index++;
 
        if ((keyword_index + 1) == keyword.Length)
            keyword_index = 0;
    }
 
    return result;
  }    
  decrypt(message,key) {
    let input = message.toUpperCase() ;
    keyword = key.toUpperCase() ;
 
    let result = "";
 
    let keyword_index = 0;
 
    for(let i=0; i<input.length;i++)
    {
        let p = (Array.IndexOf(characters, input[i]) + N -
            Array.IndexOf(characters, keyword[keyword_index])) % N;
 
        result += characters[p];
 
        keyword_index++;
 
        if ((keyword_index + 1) == keyword.Length)
            keyword_index = 0;
    }
 
    return result;
  }
}

module.exports = VigenereCipheringMachine;
