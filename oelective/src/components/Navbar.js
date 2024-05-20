import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [selectedRole, setSelectedRole] = useState('student');

  const handleChangeRole = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        <img src="https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png" alt="Logo" style={{ width: '50px', marginRight: '1rem' }} />
        {/* Heading */}
        <h1>OPEN ELECTIVE </h1>
      </div>
      <div>
        {/* Dropdown to select user role */}
        <select value={selectedRole} onChange={handleChangeRole}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>
        {/* Login/Register buttons */}
        {selectedRole !== 'admin' && (
          <>
            <Link to={`/register/${selectedRole}`}>Register</Link>
            
          </>
        )}
        <Link to={`/login/${selectedRole}`}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
