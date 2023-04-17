const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if(!date){
    return "Unable to determine the time of year!"
  }else if(date.hasOwnProperty('toString')){
    throw new Error("Invalid date!");
  }
  let month = date.getMonth()+1;
  let season;
  if((month >= 0 && month <= 2) || month == 12) season = "winter";
  if(month >= 3 && month <= 5) season = "spring";
  if(month >= 6 && month <= 8) season = "summer";
  if(month >= 9 && month <= 11) season = "autumn";
  return season;
  
}

module.exports = {
  getSeason
};
