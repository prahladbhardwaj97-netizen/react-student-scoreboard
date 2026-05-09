import StudentRow from './StudentRow.jsx'

function StudentTable({ students, onDeleteStudent, onUpdateGrade }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Grade</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentRow 
            key={student.id} 
            student={student}
            onUpdateGrade={onUpdateGrade}
            onDeleteStudent={onDeleteStudent}
          />
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable

