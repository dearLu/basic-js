const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(notRerverse){
    this.characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    this.notRerverse=notRerverse;
    if(this.notRerverse === 'undefined') this.notRerverse =true;
  }

  getRepeatKey( s,  n){
    var p = s;
    while (p.Length < n)
    {
        p += p;
    }

  return p.substring(0, n);
  }
  
  encrypt(message,key) {
    let input = message.toUpperCase() ;
     
    let keyword = this.getRepeatKey(key.toUpperCase(), input.Length);
    let q = this.characters.length;
    let result = "";

    for(let i=0; i<input.length;i++)
    {
      let letterIndex = this.characters.indexOf(input[i],0);
      let codeIndex = this.characters.indexOf(keyword[i],0);
      if (letterIndex < 0)
      {
          result += input[i].toString();
      }else{
        result  += this.characters[(q + letterIndex + ( 1  * codeIndex)) % q].toString();
      }
      
    }

    if(String(this.notRerverse)==='false'){
      return result.split("").reverse().join("");
    }
    return result;
    
  }    
  decrypt(message,key) {
    let input = message.toUpperCase() ;
     
    let keyword = this.getRepeatKey(key.toUpperCase(), input.Length);
    let q = this.characters.length;
    let result = "";

    for(let i=0; i<input.length;i++)
    {
      let letterIndex = this.characters.indexOf(input[i],0);
      let codeIndex = this.characters.indexOf(keyword[i],0);
      if (letterIndex < 0)
      {
          result += input[i].toString();
      }else{
        result  += this.characters[(q + letterIndex + ( -1  * codeIndex)) % q].toString();
      }
    }

    if(String(this.notRerverse)==='false'){
      return result.split("").reverse().join("");
    }
    return result;
    
  }
  
   
}

module.exports = VigenereCipheringMachine;
