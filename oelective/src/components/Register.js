import React, { useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Register.css';
import Admin from './Admin';

function Register() {
  let navigate = useNavigate();
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

    if (role === 'student') {
      if (!hallTicketNumber || !name || !course || !branch || !semester || !email || !password) {
        alert('Please fill in all fields');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }

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
        const response = await axios.post('http://localhost:5000/facadd', {
          name,
          email,
          subjects: subjectIds,
          password
        });

        console.log('Faculty registration successful:', response.data);
        navigate("/login/faculty");
        alert('Registration successful!');
      } catch (error) {
        console.error('Error registering faculty:', error.message);
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        {role === 'student' ? (
          <div>
            <h2>Student Register</h2>
            <form onSubmit={handlestuRegister}>
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
            <Link to="/login/student">
              <p>If already registered, click here</p>
            </Link>
          </div>
        ) : role === 'faculty' ? (
          <div>
            <h2>Faculty Register</h2>
            <form onSubmit={handlestuRegister}>
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
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="subjects">Subject IDs (comma separated):</label>
                <input
                  type="text"
                  id="subjects"
                  value={subjectIds}
                  onChange={(e) => setSubjectIds(e.target.value.split(','))}
                />
              </div>
              <div>
                <label htmlFor="facpassword">Password:</label>
                <input
                  type="password"
                  id="facpassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Register</button>
            </form>
            <Link to="/login/faculty">
              <p>If already registered, click here</p>
            </Link>
          </div>
        ) : (
          <Admin />
        )}
      </div>
    </div>
  );
}

export default Register;
