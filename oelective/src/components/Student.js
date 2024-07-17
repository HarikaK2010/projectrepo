// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function Student() {
// //   const [studentDetails, setStudentDetails] = useState(null);

// //   useEffect(() => {
// //     // Retrieve student's hall ticket number from local storage
// //     const stud = JSON.parse(localStorage.getItem('openele'));

// //     // Fetch student details from backend using the hall ticket number
// //     const fetchStudentDetails = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5000/student/${stud.hallTicketNumber}`);
// //         setStudentDetails(response.data);
// //       } catch (error) {
// //         console.error('Error fetching student details:', error.message);
// //       }
// //     };

// //     fetchStudentDetails();

// //     // Cleanup function to remove the hall ticket number from local storage
// //     return () => {
// //       localStorage.removeItem('hallTicketNumber');
// //     };
// //   }, []); // Empty dependency array ensures this effect runs only once

// //   return (
// //     <div>
// //       <h2>Student Details</h2>
// //       {studentDetails ? (
// //         <div>
// //           <p>Hi, {studentDetails.name}</p>
// //           {/* Render other student details here */}
// //         </div>
// //       ) : (
// //         <p>Loading student details...</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default Student;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Student() {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve student's hall ticket number from local storage
//     const stud = JSON.parse(localStorage.getItem('openele'));

//     // Fetch student details from backend using the hall ticket number
//     const fetchStudentDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/student/${stud.hallTicketNumber}`);
//         setStudentDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching student details:', error.message);
//       }
//     };

//     fetchStudentDetails();

//     // Cleanup function to remove the hall ticket number from local storage
//     return () => {
//       localStorage.removeItem('hallTicketNumber');
//     };
//   }, []); // Empty dependency array ensures this effect runs only once

//   const handleRegisterSubjectsClick = () => {
//     navigate("/subRegister");
//   };

//   const handleDisplayRegisteredSubjectsClick = () => {
//     navigate("/subDisplay");
//   };

//   const showrules=()=>{
//     navigate("/rules");
//   }

//   return (
//     <div>
//       <h2>Student Details</h2>
//       {studentDetails ? (
//         <div>
//           <p>Hi, {studentDetails.name}</p>
//           {/* Render other student details here */}
          
//           <div>
//             <button onClick={handleRegisterSubjectsClick}>Register for Subjects</button>
//             <button onClick={handleDisplayRegisteredSubjectsClick}>Display Registered Subjects</button>
//             <button onClick={showrules}>Guidelines for registration</button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading student details...</p>
//       )}
//     </div>
//   );
// }

// export default Student;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Student.css'; // Import your CSS file for styling

function Student() {
  const [studentDetails, setStudentDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve student's details from local storage
    const stud = JSON.parse(localStorage.getItem('openele'));
// console.log(stud.hallTicketNumber)
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
    // return () => {
    //   localStorage.removeItem('openele');
    // };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleRegisterSubjectsClick = () => {
    navigate("/subRegister");
  };

  const handleDisplayRegisteredSubjectsClick = () => {
    navigate("/subDisplay");
  };

  const showRules = () => {
    navigate("/rules");
  };

  return (
    <div className="student-container">
      <h2>Student Details</h2>
      {studentDetails ? (
        <div>
          <p>Hi, {studentDetails.name}</p>
          {/* Render other student details here */}
          
          <div className="buttons-container">
            <button onClick={handleRegisterSubjectsClick}>Register for Subjects</button>
            <button onClick={handleDisplayRegisteredSubjectsClick}>Display Registered Subjects</button>
            <button onClick={showRules}>Guidelines for Registration</button>
          </div>
        </div>
      ) : (
        <p>Loading student details...</p>
      )}
    </div>
  );
}

export default Student;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Student.css'; // Import your CSS file for styling

// function Student() {
//   const [studentDetails, setStudentDetails] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       // Retrieve student's details from local storage
//       const stud = JSON.parse(localStorage.getItem('openele'));

//       try {
//         const response = await axios.get(`http://localhost:5000/student/${stud.hallTicketNumber}`);
//         setStudentDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching student details:', error.message);
//       }
//     };

//     fetchStudentDetails();

//     // Cleanup function to remove the hall ticket number from local storage
//     return () => {
//       localStorage.removeItem('openele');
//     };
//   }, []); // Empty dependency array ensures this effect runs only once

//   const handleRegisterSubjectsClick = () => {
//     navigate("/subRegister");
//   };

//   const handleDisplayRegisteredSubjectsClick = () => {
//     navigate("/subDisplay");
//   };

//   const showRules = () => {
//     navigate("/rules");
//   };

//   return (
//     <div className="student-container">
//       <h2>Student Details</h2>
//       {studentDetails ? (
//         <div>
//           <p>Hi, {studentDetails.name}</p>
//           {/* Render other student details here */}
          
//           <div className="buttons-container">
//             <button onClick={handleRegisterSubjectsClick}>Register for Subjects</button>
//             <button onClick={handleDisplayRegisteredSubjectsClick}>Display Registered Subjects</button>
//             <button onClick={showRules}>Guidelines for Registration</button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading student details...</p>
//       )}
//     </div>
//   );
// }

// export default Student;
