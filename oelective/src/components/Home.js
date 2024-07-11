import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      
      <div class="nav-item">
            <img src="" alt="Admin" class="nav-img"/>
            <Link to="/register/admin">
          <button className="btn">ADMIN</button>
        </Link>
        </div>
        <div class="nav-item">
            <img src="images/teacher.jpeg" alt="Teacher" class="nav-img"/>
            <Link to="/register/faculty">
          <button className="btn">FACULTY</button>
        </Link>
        </div>
        <div class="nav-item">
            <img src="images/student.jpg" alt="Student" class="nav-img"/>
            <Link to="/register/student">
          <button className="btn">STUDENT</button>
        </Link>
            
        </div>
    </div>
  );
}

export default Home;
