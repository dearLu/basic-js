const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result=[];
  let arrExample=arr;
  if (!Array.isArray(arrExample) ) throw new Error('Error') ;
  if(arrExample.length === 0){return [];}
  //--discard-next исключает следующий элемент массива из преобразованного массива.
//--discard-prev исключает предыдущий элемент массива из преобразованного массива.

  for(let i=0;i<arrExample.length;i++){
    if(arrExample[i] === '--double-next' && i+1!=arrExample.length){
      result.push(arrExample[i+1]);
    }
    if(arrExample[i] ==='--double-prev' && i-1!=-1){
      result.push(arrExample[i-1]);
    }
    if(arrExample[i] ==='--discard-prev' && i-1!=-1){     
      result.splice(result.length-1, 1);
    }
    if(arrExample[i] ==='--discard-next' && i+1!=arrExample.length){
      arrExample.splice(i+1, 1);
      
    }
    if( arrExample[i] != '--double-next' && arrExample[i] !='--double-prev' && arrExample[i] !='--discard-prev'&& arrExample[i] !='--discard-next'){
      result.push(arrExample[i]);
    }
  }
  return result;
};
