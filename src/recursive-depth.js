const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return depth(arr, 1)
  }

};


function depth(array, rec) {
if (!Array.isArray(array)) return 0;

var res = rec;
for(var i = 0; i < array.length; ++i) {
    if (Array.isArray(array[i])) {
    var subDepth = depth(array[i], rec + 1);
    if (subDepth > res) {
        res = subDepth;
    }
  }
}
return res;
}