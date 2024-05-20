import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Faculty from '../../../server/models/Faculty';

function Faculty() {
  const [facDetails, setFacDetails] = useState(null);

  useEffect(() => {
    // Retrieve student's hall ticket number from local storage
    const fac = JSON.parse(localStorage.getItem('openele'));

    // Fetch student details from backend using the hall ticket number
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/faculty/${fac.email}`);
        setFacDetails(response.data);
      } catch (error) {
        console.error('Error fetching faculty details:', error.message);
      }
    };

    fetchStudentDetails();

    // Cleanup function to remove the hall ticket number from local storage
    return () => {
      localStorage.removeItem('email');
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h2>Faculty Details</h2>
      {facDetails ? (
        <div>
          <p>Hi, {facDetails.name}</p>
          {/* Render other student details here */}
        </div>
      ) : (
        <p>Loading faculty details...</p>
      )}
    </div>
  );
}

export default Faculty;
