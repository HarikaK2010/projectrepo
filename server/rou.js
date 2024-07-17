const express = require('express');
const router = express.Router();
const Student = require('./models/Student');
const Faculty=require("./models/Faculty")
const Subject=require("./models/Subject")

// Route to add student details
router.post('/stuadd', async (req, res) => {
  try {
    // Extract student details from request body
    const { hallTicketNumber, name, course, branch, semester, email, password } = req.body;

    // Create a new student instance
    const newStudent = new Student({
      hallTicketNumber,
      name,
      course,
      branch,
      semester,
      email,
      password,
      SelectedSubjects: [], // Assuming SelectedSubjects is initially empty
      AssignedSubject: '', // Assuming no subject is assigned initially
      ShiftedSubject: '', // Assuming no subject is shifted initially
      SubjectShiftRequests: [] // Assuming no shift requests initially
    });

    // Save the new student to the database
    await newStudent.save();

    // Send a success response
    res.status(200).json({success:true });
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error adding student:', error.message);
    res.status(500).json({ message: 'Failed to add student' });
  }
});

router.post('/stulogin', async (req, res) => {
  try {
    const { hallTicketNumber, password } = req.body;

    const student = await Student.findOne({ hallTicketNumber, password });

    if (!student) {
      return res.status(400).json({ message: 'Invalid hall ticket number or password' });
    }

    res.status(200).json({ success: true, student: student });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Failed to login. Please try again.' });
  }
});


router.get('/student/:hallticketnumber', async (req, res) => {
  try {
    const hallTicketNumber = req.params.hallticketnumber;

    // Find the student in the database by hall ticket number
    const student = await Student.findOne({ hallTicketNumber });

    if (!student) {
      // If no student found with the provided hall ticket number, return 404
      return res.status(404).json({ message: 'Student not found' });
    }

    // If student found, return the student details
    res.status(200).json(student);
  } catch (error) {
    console.error('Error fetching student details:', error.message);
    res.status(500).json({ message: 'Failed to fetch student details' });
  }
});


// Add this endpoint to your existing server.js file

// Endpoint to simulate fetching semester name from student database
// router.get('/studsem', (req, res) => {
//   // Replace with actual logic to fetch semester name from database
//   const semesterName = '32'; // Example: Assume semester name '32' for demonstration
//   res.json({ semesterName });
// });


router.post('/facadd', async (req, res) => {
  try {
    const { name, email, password, subjects } = req.body;

    // Check if all required fields are present
    if (!name || !email || !password || !subjects) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Check if the email is already registered
    const existingFaculty = await Faculty.findOne({ email });
    if (existingFaculty) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Create a new faculty instance
    const faculty = new Faculty({
      name,
      email,
      password,
      subjects
    });

    // Save the faculty to the database
    await faculty.save();

    // Return a success message
    res.status(201).json({ message: 'Faculty registered successfully' });
  } catch (error) {
    console.error('Error registering faculty:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/faclogin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find faculty member by email
    const faculty = await Faculty.findOne({ email });

    // If no faculty member found with the provided email
    if (!faculty) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if the password is correct
    // const isPasswordValid = await faculty.isValidPassword(password);

    // // If password is incorrect
    // if (!isPasswordValid) {
    //   return res.status(400).json({ message: 'Invalid email or password' });
    // }

    // If login is successful, return success and faculty details
    res.status(200).json({ success: true, faculty });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Failed to login. Please try again.' });
  }
});


router.get('/faculty/:email', async (req, res) => {
  try {
    const email = req.params.email;

    // Find the student in the database by hall ticket number
    const faculty = await Faculty.findOne({ email });

    if (!faculty) {
      // If no student found with the provided hall ticket number, return 404
      return res.status(404).json({ message: 'faculty not found' });
    }

    // If student found, return the student details
    res.status(200).json(faculty);
  } catch (error) {
    console.error('Error fetching faculty details:', error.message);
    res.status(500).json({ message: 'Failed to fetch faculty details' });
  }
});

router.get('/allotted-subjects/:hallTicketNumber', async (req, res) => {
  try {
    const student = await Student.findOne({ hallTicketNumber: req.params.hallTicketNumber }).populate('SelectedSubjects AssignedSubject ShiftedSubject SubjectShiftRequests.subject');
    
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Fetch the subjects from the Subject collection
    const subjects = await Subject.find({ _id: { $in: student.SelectedSubjects } });

    if (!Array.isArray(subjects) || subjects.length === 0) {
      console.error('No subjects found for the student:', student.name);
      return res.status(404).json({ message: 'No subjects found' });
    }

    // Fetch the faculty for each subject
    const subjectsWithFaculty = await Promise.all(subjects.map(async (subject) => {
      const faculty = await Faculty.findOne({ subjects: subject._id });
      return {
        name: subject.name,
        code: subject.code,
        facultyName: faculty ? faculty.name : 'No faculty assigned'
      };
    }));

    res.json({ student: student.name, subjects: subjectsWithFaculty });
  } catch (err) {
    console.error('Error fetching student data:', err);
    res.status(500).json({ message: 'Server error' });
  }
});





module.exports = router;
