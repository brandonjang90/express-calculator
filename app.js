const express = require('express');
const app = express();
const calculatorRoutes = require('./calculatorRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', calculatorRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
