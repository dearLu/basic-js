const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {

    return chainMaker.split("(").length - 1;

  },
  addLink(value) {

    if(chainMaker.getLength() === 0){
      chainMaker+=`( ${value} )`;
    }else{      
      chainMaker+=`~~( ${value} )`;
    }

  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    return chainMaker;
  }
};

module.exports = chainMaker;
