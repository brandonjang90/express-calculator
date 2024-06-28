function calculateMean(nums) {
  if (nums.length === 0) return 0;
  let sum = nums.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum / nums.length;
}
  
function calculateMedian(nums) {
const sorted = nums.sort(function(a, b) {
    return a - b;
    });
let mid = Math.floor(sorted.length / 2);
return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
  
function calculateMode(nums) {
  let frequency = {};
  nums.forEach(function (num) {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  let maxFreq = 0;
  let mode = [];
  for (let key in frequency) {
    if (frequency[key] > maxFreq) {
      mode = [Number(key)];
      maxFreq = frequency[key];
    } else if (frequency[key] === maxFreq) {
      mode.push(Number(key));
    }
  }
  return mode.length === nums.length ? [] : mode[0];
}
  
function validateNums(numsString) {
    if (!numsString) {
      return { error: 'nums are required.' };
    }
  
    let nums = numsString.split(',').map(function(num) {
      if (isNaN(num)) {
        throw new Error(num + ' is not a number.');
      }
      return Number(num);
    });
  
    return nums;
}

module.exports = {
  calculateMean,
  calculateMedian,
  calculateMode,
  validateNums
};