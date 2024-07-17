import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [selectedRole, setSelectedRole] = useState('student');

  const handleChangeRole = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png" alt="Logo" style={{ width: '50px', marginRight: '1rem' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0' }}>JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY HYDERABAD</h1>
        </div>
        <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>University College of Engineering, Science & Technology Hyderabad</h2>
        <h3 style={{ fontSize: '1rem', margin: '0.3rem 0' }}>Examination Branch</h3>
        <h5 style={{ fontSize: '0.8rem', margin: '0.3rem 0' }}>Kukatpally, Hyderabad - 500 085, Telangana, India</h5>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '1rem 0', color: '#0040FF' }}>OPEN ELECTIVE COURSE REGISTRATION</h1>
        <hr style={{ borderTop: '2px solid #0040FF', width: '100%' }} />
        <hr style={{ borderTop: '1px solid red', width: '100%' }} />
      </div>

      {/* Add additional navigation elements or controls here */}
    </nav>
  );
}

export default Navbar;
