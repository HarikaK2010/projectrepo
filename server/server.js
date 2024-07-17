
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const XLSX = require('xlsx');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const PORT = process.env.PORT || 5001;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());  // Add this line to enable CORS

// // Ensure the data directory exists
// const dataDir = path.join(__dirname, 'data');
// if (!fs.existsSync(dataDir)) {
//     fs.mkdirSync(dataDir);
// }

// // Endpoint to handle form submission
// app.post('/submit', (req, res) => {
//     const {
//         prn,
//         firstName,
//         middleName,
//         lastName,
//         branch,
//         div,
//         rollNo,
//         cgpa,
//         choice1,
//         choice2,
//         choice3
//     } = req.body;

//     const timestamp = new Date().toLocaleString();
//     const filePath = path.join(dataDir, 'excell.xlsx');

//     let workbook;
//     try {
//         workbook = XLSX.readFile(filePath);
//     } catch (error) {
//         workbook = XLSX.utils.book_new();
//     }

//     if (workbook.SheetNames.length === 0) {
//         const header = [
//             'PRN', 'Timestamp', 'First Name', 'Middle Name', 'Last Name',
//             'Branch', 'Div', 'Roll No.', 'CGPA', '[Choice 1]', '[Choice 2]', '[Choice 3]'
//         ];
//         const worksheet = XLSX.utils.json_to_sheet([{}], { header });
//         XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     }

//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const newRow = {
//         PRN: prn,
//         Timestamp: timestamp,
//         'First Name': firstName,
//         'Middle Name': middleName,
//         'Last Name': lastName,
//         Branch: branch,
//         Div: div,
//         'Roll No.': rollNo,
//         CGPA: cgpa,
//         '[Choice 1]': choice1,
//         '[Choice 2]': choice2,
//         '[Choice 3]': choice3
//     };

//     XLSX.utils.sheet_add_json(worksheet, [newRow], { skipHeader: true, origin: -1 });
//     XLSX.writeFile(workbook, filePath);

//     res.send('Form data saved successfully!');
// });

// // Endpoint to verify the server is running
// app.get('/', (req, res) => {
//     res.send('Server is running and reachable.');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const Student = require('./models/Student');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());  // Enable CORS

// Ensure the data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
    const {
        prn,
        firstName,
        middleName,
        lastName,
        branch,
        div,
        rollNo,
        cgpa,
        choice1,
        choice2,
        choice3
    } = req.body;

    const timestamp = new Date().toLocaleString();
    const filePath = path.join(dataDir, 'excell.xlsx');

    let workbook;
    try {
        workbook = XLSX.readFile(filePath);
    } catch (error) {
        workbook = XLSX.utils.book_new();
    }

    if (workbook.SheetNames.length === 0) {
        const header = [
            'PRN', 'Timestamp', 'First Name', 'Middle Name', 'Last Name',
            'Branch', 'Div', 'Roll No.', 'CGPA', '[Choice 1]', '[Choice 2]', '[Choice 3]'
        ];
        const worksheet = XLSX.utils.json_to_sheet([{}], { header });
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    }

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const newRow = {
        PRN: prn,
        Timestamp: timestamp,
        'First Name': firstName,
        'Middle Name': middleName,
        'Last Name': lastName,
        Branch: branch,
        Div: div,
        'Roll No.': rollNo,
        CGPA: cgpa,
        '[Choice 1]': choice1,
        '[Choice 2]': choice2,
        '[Choice 3]': choice3
    };

    XLSX.utils.sheet_add_json(worksheet, [newRow], { skipHeader: true, origin: -1 });
    XLSX.writeFile(workbook, filePath);

    res.send('Form data saved successfully!');
});



// Endpoint to get subjects from the text file
app.get('/subjects/:semester', (req, res) => {
    const { semester } = req.params;
    const filePath = path.join(dataDir, `sub${semester}.txt`);

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const subjects = data.split('\n').map(subject => subject.trim());

        console.log('Subjects:', subjects); // For debugging

        res.json(subjects);
    } catch (error) {
        console.error('Error reading subjects file:', error);
        res.status(500).send('Error reading subjects file');
    }
});

// Endpoint to verify the server is running
app.get('/', (req, res) => {
    res.send('Server is running and reachable.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


