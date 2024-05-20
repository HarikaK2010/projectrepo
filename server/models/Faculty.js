const mongoose = require('mongoose');

// Define the Faculty schema
const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  }]
});

// Create the Faculty model
const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
