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

//POST /patients - Add a new patient:
app.post('/patients', async (req, res) => {
    try {
      const patient = new Patient(req.body);
      await patient.save();
      res.status(201).json(patient);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
