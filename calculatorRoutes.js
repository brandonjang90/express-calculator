const express = require('express');
const router = express.Router()
const {calculateMean, calculateMedian, calculateMode, validateNums} = require('./expressCalculator')

app.get('/mean', function(req, res) {
    try {
      let nums = validateNums(req.query.nums);
      if (nums.error) {
        res.status(400).send(nums.error);
      } else {
        let mean = calculateMean(nums);
        res.send('Mean: ' + mean);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
});
  
  app.get('/median', function(req, res) {
    try {
      let nums = validateNums(req.query.nums);
      if (nums.error) {
        res.status(400).send(nums.error);
      } else {
        let median = calculateMedian(nums);
        res.send('Median: ' + median);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  app.get('/mode', function(req, res) {
    try {
      let nums = validateNums(req.query.nums);
      if (nums.error) {
        res.status(400).send(nums.error);
      } else {
        let mode = calculateMode(nums);
        res.send('Mode: ' + mode);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  

module.exports = router;