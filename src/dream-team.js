const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result='';
  let arr=[];
  if(members){
    for(let i=0;i<members.length;i++){
      if (typeof members[i] == 'string' && members[i].trim()!=="") {
          result+=(members[i].trim().split(''))[0];
      }
    }
    sortedArr=result.toLowerCase().split('');

    arr=sortedArr.sort((a, b) => a !== b ? a < b? -1 : 1 : 0);
    
    return arr.join('').toUpperCase();
  }
  return false;
};
