import React, { useState } from 'react';
import axios from 'axios';

function RegisterSubjects() {
  const subjects = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
  const [firstPriority, setFirstPriority] = useState('');
  const [secondPriority, setSecondPriority] = useState('');
  const [thirdPriority, setThirdPriority] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Data to be saved
    const data = {
      firstPriority,
      secondPriority,
      thirdPriority
    };

    try {
      // Send data to backend to save in student database
      await axios.post('http://localhost:5000/student/registerSubjects', data);
      alert('Subjects registered successfully');
    } catch (error) {
      console.error('Error saving subject preferences:', error.message);
      alert('Failed to register subjects');
    }
  };

  const availableSubjects = (selectedSubjects) => {
    return subjects.filter(subject => !selectedSubjects.includes(subject));
  };

  return (
    <div>
      <h2>Register for Subjects</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Priority:
            <select value={firstPriority} onChange={(e) => setFirstPriority(e.target.value)} required>
              <option value="" disabled>Select a subject</option>
              {availableSubjects([secondPriority, thirdPriority]).map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label>
            Second Priority:
            <select value={secondPriority} onChange={(e) => setSecondPriority(e.target.value)} required>
              <option value="" disabled>Select a subject</option>
              {availableSubjects([firstPriority, thirdPriority]).map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label>
            Third Priority:
            <select value={thirdPriority} onChange={(e) => setThirdPriority(e.target.value)} required>
              <option value="" disabled>Select a subject</option>
              {availableSubjects([firstPriority, secondPriority]).map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterSubjects;
// import React from 'react';

// function RegisterSubjects() {
//   return (
//     <div>
//       <h2>Register for Subjects</h2>
//       {/* Add your form or content here */}
//     </div>
//   );
// }

// export default RegisterSubjects;
