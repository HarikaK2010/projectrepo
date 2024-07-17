// // Import React and any necessary CSS for styling
// import React from 'react';
// import './Rules.css'; // Assuming you have a Rules.css file for styling

// // Functional component Rules
// function Rules() {
//   return (
//     <div className="rules-container">
//       <h2>Important Information about Open Elective Registration</h2>
//       <ol>
//         <li>
//           <strong>Registration Process:</strong>
//           <ul>
//             <li>
//               Faculty Advisor/Counselor: Assigned to a group of 20 students to advise them about the undergraduate program, course structure, and curriculum.
//             </li>
//             <li>
//               Online Registration: The academic section invites registration forms from students before the beginning of the semester through online registration, ensuring date and time stamping.
//             </li>
//             <li>
//               Approval Requirement: Students must obtain written approval from their faculty advisor/counselor, which should be submitted to the college academic section through the Head of the Department.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Course Selection:</strong>
//           <ul>
//             <li>
//               Semester Structure: Students can register for all subjects/courses in a semester as specified in the course structure with a maximum of 4 additional credits.
//             </li>
//             <li>
//               Additional Subjects/Courses: Must be approved by the faculty advisor/counselor.
//             </li>
//             <li>
//               Ambiguous or Multiple Choices: If ambiguous or multiple options are submitted, only the first mentioned subject/course in that category will be considered.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Changes and Dropping of Subjects:</strong>
//           <ul>
//             <li>
//               Final Registration: Subject/course options exercised through online registration are final and cannot be changed or inter-changed. Alternate choices will not be considered unless unforeseen circumstances prevent offering a subject/course.
//             </li>
//             <li>
//               Dropping Subjects/Courses: Permitted only with prior approval from the faculty advisor/counselor within 15 days from the beginning of the current semester.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Open Electives:</strong>
//           <ul>
//             <li>
//               Selection: Students must choose three open electives (OE-I, II, & III) from the list of open electives provided.
//             </li>
//             <li>
//               Restrictions: Students cannot opt for an open elective offered by their own (parent) department if it is already listed under any category of subjects offered by the parent department in any semester.
//             </li>
//           </ul>
//         </li>
//       </ol>
//     </div>
//   );
// }

// export default Rules;

import React from 'react';
import './Rules.css'; // Import CSS file for styling

const Rules = () => {
  return (
    <div className="rules-container">
      <h2>Guidelines for Registration</h2>
      <ul>
        <li>
          <strong>First-Come, First-Served Allotment:</strong> Registration for elective courses is done on a FCFS basis. Once the maximum number of seats for a course is filled, no additional students can enroll in that course.
        </li>
        <li>
          <strong>Maximum Number of Seats:</strong> Each elective course has a maximum number of seats available, which is strictly adhered to during the registration process.
        </li>
        <li>
          <strong>Departmental Restrictions:</strong> Students are not allowed to choose elective courses offered by their parent department. This encourages interdisciplinary learning and broadens their academic experience.
        </li>
        <li>
          <strong>Choice Order:</strong> Students must choose 3 subjects in order of preference during registration. This helps in efficient allocation if their first choice is not available.
        </li>
      </ul>
    </div>
  );
};

export default Rules;

