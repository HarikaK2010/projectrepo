import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Student() {
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    // Retrieve student's hall ticket number from local storage
    const stud = JSON.parse(localStorage.getItem('openele'));

    // Fetch student details from backend using the hall ticket number
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/student/${stud.hallTicketNumber}`);
        setStudentDetails(response.data);
      } catch (error) {
        console.error('Error fetching student details:', error.message);
      }
    };

    fetchStudentDetails();

    // Cleanup function to remove the hall ticket number from local storage
    return () => {
      localStorage.removeItem('hallTicketNumber');
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h2>Student Details</h2>
      {studentDetails ? (
        <div>
          <p>Hi, {studentDetails.name}</p>
          {/* Render other student details here */}
        </div>
      ) : (
        <p>Loading student details...</p>
      )}
    </div>
  );
}

export default Student;
