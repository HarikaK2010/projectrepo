// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import './Login.css'; // Import your CSS file

// function Login() {
//   const navigate = useNavigate();
//   const { role } = useParams();
//   const [hallTicketNumber, setHallTicketNumber] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       if (role === "student") {
//         const response = await axios.post('http://localhost:5000/stulogin', {
//           hallTicketNumber,
//           password
//         });

//         if (response.data.success) {
//           const student = response.data.student;
//           console.log('Login successful. Student details:', student);

//           // Store student's hall ticket number and password in local storage
//           localStorage.setItem('openele', JSON.stringify({ hallTicketNumber: student.hallTicketNumber, password, semester: student.semester }));

//           navigate("/student"); // Ensure you are using the correct navigate function
//         } else {
//           console.log('Login failed:', response.data.message);
//         }
//       } else if (role === "faculty") {
//         const response = await axios.post('http://localhost:5000/faclogin', {
//           email: hallTicketNumber,
//           password
//         });

//         if (response.data.success) {
//           const faculty = response.data.faculty;
//           console.log('Login successful. Faculty details:', faculty);

//           // Store faculty's email and password in local storage
//           localStorage.setItem('openele', JSON.stringify({ email: faculty.email, password }));

//           navigate("/faculty"); // Ensure you are using the correct navigate function
//         } else {
//           console.log('Login failed:', response.data.message);
//         }
//       }
//     } catch (error) {
//       console.error('Error logging in:', error.message);
//       alert('Failed to login. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="hallTicketNumber">Hall Ticket Number:</label>
//           <input
//             type="text"
//             id="hallTicketNumber"
//             value={hallTicketNumber}
//             onChange={(e) => setHallTicketNumber(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Login() {
  const navigate=useNavigate()
  const {role}=useParams()
  const [hallTicketNumber, setHallTicketNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if(role=="student"){
        const response = await axios.post('http://localhost:5000/stulogin', {
        hallTicketNumber,
        password
      });
  
      if (response.data.success) {
        const student = response.data.student;
        console.log('Login successful. Student details:', student);

        // Store student's hall ticket number and password in local storage
        localStorage.setItem('openele', JSON.stringify({ hallTicketNumber: student.hallTicketNumber, password, semester: student.semester }));
        const storedData = JSON.parse(localStorage.getItem('openele'));
        console.log('Stored Data after login:', storedData);

        navigate("/student"); // Ensure you are using the correct navigate function
      } else {
        console.log('Login failed:', response.data.message);
      }
    }
    else if(role=="faculty"){
      const response = await axios.post('http://localhost:5000/faclogin', {
        email:hallTicketNumber,
        password
      });
  
      if (response.data.success) {
        const faculty = response.data.faculty;
        console.log('Login successful. faculty details:', faculty);

        // Store student's hall ticket number and password in local storage
        localStorage.setItem('openele', JSON.stringify({ email: faculty.email, password }));

        navigate("/faculty"); // Ensure you are using the correct navigate function
      } else {
        console.log('Login failed:', response.data.message);
      }
    }
      } catch (error) {
        console.error('Error logging in:', error.message);
        alert('Failed to login. Please try again.');
      }
      
  };


  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
          <div>
          <label htmlFor="hallTicketNumber">Hall Ticket Number:</label>
          <input
            type="text"
            id="hallTicketNumber"
            value={hallTicketNumber}
            onChange={(e) => setHallTicketNumber(e.target.value)}
          />
          </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;