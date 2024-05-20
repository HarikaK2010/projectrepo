const mongoose = require('mongoose');

// Define the Subject schema
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  students: [{
    type: String // Assuming hall ticket numbers are stored as strings
  }]
});

// Create the Subject model
const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
