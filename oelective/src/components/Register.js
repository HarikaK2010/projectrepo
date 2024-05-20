// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Register() {
//   let navigate = useNavigate();
//   const [hallTicketNumber, setHallTicketNumber] = useState('');
//   const [name, setName] = useState('');
//   const [course, setCourse] = useState('');
//   const [branch, setBranch] = useState('');
//   const [semester, setSemester] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  

//   const handlestuRegister = async (e) => {
//     e.preventDefault();
  
//     // Check if all fields are filled
//     if (!hallTicketNumber || !name || !course || !branch || !semester || !email || !password) {
//       alert('Please fill in all fields');
//       return;
//     }
  
//     // Check if email format is valid
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert('Please enter a valid email address');
//       return;
//     }
  
//     // Check if password meets minimum length requirement
//     if (password.length < 6) {
//       alert('Password must be at least 6 characters long');
//       return;
//     }
  
//     try {
//       const response = await fetch("http://localhost:5000/stuadd", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           hallTicketNumber,
//           name,
//           course,
//           branch,
//           semester,
//           email,
//           password
//         })
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         if (data.success) {
//           navigate("/login");
//           alert('Registration successful!');
//         } else {
//           throw new Error('Failed to register');
//         }
//       } else {
//         throw new Error('Failed to register');
//       }
//     } catch (error) {
//       console.error('Error registering:', error.message);
//       alert('Failed to register. Please try again.');
//     }
//   };
  
  


//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div style={{ textAlign: 'center' }}>
//         <h2>Register</h2>
//         <form onSubmit={handlestuRegister}>
//           <div>
//             <label htmlFor="hallTicketNumber">Hall Ticket Number:</label>
//             <input
//               type="text"
//               id="hallTicketNumber"
//               value={hallTicketNumber}
//               onChange={(e) => setHallTicketNumber(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="course">Course:</label>
//             <input
//               type="text"
//               id="course"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="branch">Branch:</label>
//             <input
//               type="text"
//               id="branch"
//               value={branch}
//               onChange={(e) => setBranch(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="semester">Semester:</label>
//             <input
//               type="text"
//               id="semester"
//               value={semester}
//               onChange={(e) => setSemester(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email Address:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  let navigate=useNavigate()
  const { role } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hallTicketNumber, setHallTicketNumber] = useState('');
  const [course, setCourse] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [subjectIds, setSubjectIds] = useState('');

  const handlestuRegister = async (e) => {
    e.preventDefault();
    try {
      if (role === 'student') {
        // Send POST request to server for student registration
       
    // Check if all fields are filled
    if (!hallTicketNumber || !name || !course || !branch || !semester || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    // Check if email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // Check if password meets minimum length requirement
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/stuadd", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          hallTicketNumber,
          name,
          course,
          branch,
          semester,
          email,
          password
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          navigate("/login/student");
          alert('Registration successful!');
        } else {
          throw new Error('Failed to register');
        }
      } else {
        throw new Error('Failed to register');
      }
    } catch (error) {
      console.error('Error registering:', error.message);
      alert('Failed to register. Please try again.');
    }
      } else if (role === 'faculty') {
        try {
          // Send POST request to server for faculty registration
          const response = await axios.post('http://localhost:5000/facadd', {
            name,
            email,
            subjects: subjectIds, // Ensure subjectIds are sent as subjects
            password
          });
      
          console.log('Faculty registration successful:', response.data);
          navigate("/login/faculty");
          alert('Registration successful!');
        } catch (error) {
          console.error('Error registering faculty:', error.message);
          // Handle registration failure
        }
      }
      
    } catch (error) {
      console.error('Error registering:', error.message);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        {role === 'student' ? (
          <div>
            <h2>Register</h2>
            <form onSubmit={handlestuRegister}>
              {/* Student registration form */}
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
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="course">Course:</label>
                <input
                  type="text"
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="branch">Branch:</label>
                <input
                  type="text"
                  id="branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="semester">Semester:</label>
                <input
                  type="text"
                  id="semester"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="stupassword">Password:</label>
                <input
                  type="password"
                  id="stupassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        ) : role === 'faculty' ? (
          <div>
            <h2>Register Faculty</h2>
            {/* Faculty registration form */}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject IDs (comma separated)"
              value={subjectIds}
              onChange={(e) => setSubjectIds(e.target.value.split(','))}
            />
            <input
              type="password"
              id="facpassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlestuRegister}>Register</button>
          </div>
        ) : (
          <p>Invalid role</p>
        )}
      </div>
    </div>
  );
}

export default Register;
