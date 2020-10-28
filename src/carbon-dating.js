const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let activity=Number(sampleActivity);
  if(activity instanceof Number && !isNan(activity)){
    activity=Math.round(activity);
    k=0.693/HALF_LIFE_PERIOD;
    t = Math.log2(MODERN_ACTIVITY/activity) / k;
    return t;
  }
return false;
};
