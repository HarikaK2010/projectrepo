import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RegisterSubjects.css'; // Import your CSS file

const RegisterSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const [formData, setFormData] = useState({
        prn: '',
        firstName: '',
        middleName: '',
        lastName: '',
        branch: '',
        div: '',
        rollNo: '',
        cgpa: '',
        choice1: '',
        choice2: '',
        choice3: ''
    });

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                // Fetch hallTicketNumber from localStorage
                const storedData = JSON.parse(localStorage.getItem('openele'));
                console.log('Stored Data in RegisterSubjects:', storedData);
                const subjectsResponse = await axios.get(`http://localhost:5001/subjects/${storedData.semester}`);
                setSubjects(subjectsResponse.data);
            } catch (error) {
                console.error('Error fetching subjects:', error);
            }
        };

        fetchSubjects();
    }, []); // Empty dependency array ensures useEffect runs once on component mount

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/submit', formData);
            console.log(response.data);
            // Handle success
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error
        }
    };

    const getFilteredSubjects = (excludeSubjects) => {
        return subjects.filter(subject => !excludeSubjects.includes(subject));
    };

    return (
        <div className="register-subjects-container">
            <h2>Register Subjects Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Input fields */}
                <select name="branch" value={formData.branch} onChange={handleChange}>
                <option value="">Select Branch</option>
                {['CSE', 'ECE', 'EEE', 'Civil', 'Mechanical', 'Chemical'].map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                ))}
                </select>
                <input type="text" name="prn" value={formData.prn} onChange={handleChange} placeholder="PRN" />
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Middle Name" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                {/* <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Branch" /> */}
                
                <input type="text" name="div" value={formData.div} onChange={handleChange} placeholder="Division" />
                <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} placeholder="Roll No." />
                <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange} placeholder="CGPA" />

                {/* Dropdowns */}
                <select name="choice1" value={formData.choice1} onChange={handleChange}>
                    <option value="">Select Choice 1</option>
                    {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                    ))}
                </select>

                <select name="choice2" value={formData.choice2} onChange={handleChange}>
                    <option value="">Select Choice 2</option>
                    {getFilteredSubjects([formData.choice1]).map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                    ))}
                </select>

                <select name="choice3" value={formData.choice3} onChange={handleChange}>
                    <option value="">Select Choice 3</option>
                    {getFilteredSubjects([formData.choice1, formData.choice2]).map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                    ))}
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegisterSubjects;
