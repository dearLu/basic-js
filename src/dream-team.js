const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result='';
  if(members){
    for(let i=0;i<members.length;i++){
      if (typeof members[i] == 'string' && members[i].trim()!=="") {
          result+=(members[i].trim().split(''))[0];
      }
    }
    sortedArr=result.split('');
    /*for(let j=0; j<sortedArr.length;j++){

    }*/
   
    return sortedArr.sort().join('').toUpperCase();
  }
  return false;
};
