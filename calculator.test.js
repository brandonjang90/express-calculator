const {
    calculateMedian,
    calculateMode,
    calculateMean
  } = require("./expressCalculator");
  
  describe("#calculateMedian", function(){
    it("calculates the median of an even set", function(){ 
      expect(calculateMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("calculates the median of an odd set", function () { 
      expect(calculateMedian([1, -1, 4])).toEqual(1)
    })
  })
  
  describe("#calculateMean", function () {
    it("calculates the mean of an empty array", function () { 
      expect(calculateMean([])).toEqual(0)
    })
    it("calculates the mean of an array of numbers", function () { 
      expect(calculateMean([1,-1,4,2])).toEqual(1.5)
    })
  })
  
  describe("#calculateMode", function () {
    it("calculates the mode", function () { 
      expect(calculateMode([1,1,1,2,2,3])).toEqual(1)
    })
  })