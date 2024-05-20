const mongoose = require('mongoose');

const shiftRequestSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const studentSchema = new mongoose.Schema({
  hallTicketNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  semester: {
    type: Number,
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
  SelectedSubjects: [String],
  AssignedSubject: String,
  ShiftedSubject: String,
  SubjectShiftRequests: [shiftRequestSchema]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
