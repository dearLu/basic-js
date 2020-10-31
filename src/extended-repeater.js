const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let res='';
let count;
  if(String(options.repeatTimes)==='undefined'){
    return str+String(options.addition);
  }else{
    count=options.repeatTimes;
  }

  for(let i=0;i<count;i++){
    res+=String(str);
    for(let j=0; j<options.additionRepeatTimes;j++){
      
        res+=String(options.addition);
        if(j!=options.additionRepeatTimes-1){
          if(String(options.additionSeparator).trim()==='undefined'){
            res+='|';
          }else{
            res+=String(options.additionSeparator);
          }
        }      
    }
    if(i!=count-1 ){
      if(String(options.separator).trim()==='undefined'){
        res+='+';
      }else{
        res+=String(options.separator);
      }
    }
    
  }

    return res;
}

