const mongoose = require('mongoose');

const ClinicalDataSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  type: { type: String, enum: ['Blood Pressure', 'Respiratory Rate', 'Blood Oxygen Level', 'Heart Beat Rate'], required: true },
  value: { type: String, required: true }
});

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  clinicalData: [ClinicalDataSchema]
});

module.exports = mongoose.model('Patient', PatientSchema);
