import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
  

<div>
<div className="nav-item" style={{ marginBottom: '10px' }}>
  <img src="" alt="Admin" className="nav-img" />
  <Link to="/register/admin">
    <button className="btn" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>ADMIN</button>
  </Link>
</div>
<div className="nav-item" style={{ marginBottom: '10px' }}>
  <img src="images/teacher.jpeg" alt="Teacher" className="nav-img" />
  <Link to="/register/faculty">
    <button className="btn" style={{ backgroundColor: '#008CBA', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>FACULTY</button>
  </Link>
</div>
<div className="nav-item">
  <img src="images/student.jpg" alt="Student" className="nav-img" />
  <Link to="/register/student">
    <button className="btn" style={{ backgroundColor: '#f44336', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>STUDENT</button>
  </Link>
</div>
</div>
  );
}

export default Home;
