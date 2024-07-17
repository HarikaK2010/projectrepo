import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayRegSub() {
  const [studentData, setStudentData] = useState(null);
  const stud = JSON.parse(localStorage.getItem('openele')); // Parsing localStorage data

  useEffect(() => {
    console.log('localStorage data:', stud);
    if (!stud || !stud.hallTicketNumber) {
      console.error('Invalid or missing hall ticket number in localStorage.');
      return;
    }

    axios.get(`http://localhost:5000/allotted-subjects/${encodeURIComponent(stud.hallTicketNumber)}`)
      .then(response => {
        console.log("Data received:", response.data);
        setStudentData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the student data!', error);
        setStudentData(null); // Clear studentData on error
      });
  }, [stud.hallTicketNumber]); // Ensure useEffect depends on stud for updates

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{studentData.student}'s Allotted Subjects</h1>
      <ul>
        {studentData.subjects.map((subject, index) => (
          <li key={index}>
            <p>Subject Name: {subject.name}</p>
            <p>Subject Code: {subject.code}</p>
            <p>Faculty Name: {subject.facultyName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayRegSub;
