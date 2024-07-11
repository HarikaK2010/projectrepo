import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [selectedRole, setSelectedRole] = useState('student');

  const handleChangeRole = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex',flexDirection:"column", alignItems: 'center' }}>
        {/* Logo */}
        <div style={{display:'flex',alignItems: 'center' ,left:'50px'}}>
        <img src="https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png" alt="Logo" style={{ width: '50px', marginRight: '1rem' }} />
      
        <h1 className="jntuh">JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY HYDERABAD</h1>
        </div>
        <h2>University College of Engineering , Science & Technology Hyderabad</h2>
        <h3>Examination Branch</h3>
        <h5>Kukatpally, Hyderabad - 500 085, Telangana, India</h5>
        <h1 className="oe">OPEN ELECTIVE COURSE REGISTRATION</h1>
        <hr className="thick-blue-line"/>
        <hr className="red-line"/>
    

      </div>

      {/* <div>
        
        <select value={selectedRole} onChange={handleChangeRole}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>
        
        {selectedRole !== 'admin' && (
          <>
            <Link to={`/register/${selectedRole}`}>Register</Link>
          </>
        )}
        <Link to={`/login/${selectedRole}`}>Login</Link>
      </div> */}

    </nav>
  );
}

export default Navbar;
