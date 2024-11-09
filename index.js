const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Connecting to MongoDB connection using Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/healthcare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Import the Patient model
const Patient = require('./models/Patient');



