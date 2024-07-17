import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Student from './components/Student';
import Faculty from './components/Faculty';
import RegisterSubjects from './components/RegisterSubjects';
import DisplayRegSub from './components/DisplayRegSub';
import Rules from './components/Rules';
// import SubReg from './components/SubReg';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/:role" element={<Login />} />
          <Route path="/register/:role" element={<Register />} /> {/* Added :role parameter */}
          <Route path="/student" element={<Student />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/subRegister" element={<RegisterSubjects></RegisterSubjects>} />
          <Route path="/subDisplay" element={<DisplayRegSub></DisplayRegSub>} />
          <Route path="/rules" element={<Rules></Rules>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
