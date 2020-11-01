const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date ) {
let month;
try{
  if(date){
    
    if ( Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN');
      if( date instanceof Date){   
        
        month=new Date(date);
        if(month.getMonth() === null){
          return  new Error('THROWN') ;
        }            
        
        if(month!=0 )
          return findSeason(month.getMonth());
        else 
          throw new Error('THROWN') ; 
      }else{
          throw new Error('THROWN') ;
      }
      

  }else{
    return 'Unable to determine the time of year!';
  }
}catch(err){
  throw new Error('THROWN') ;
}

};

function findSeason(number){
  if(number>=11 || number<2){
    return 'winter';
  }
  if(number>=2 &&number<5){
    return 'spring';
  }
  if(number>=5 && number<8){
    return 'summer';
  }
  if(number>=8 && number<11){
    return 'autumn';
  }
  return 0;
}
