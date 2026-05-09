import React from 'react';

function StudentRow({ student, onUpdateGrade, onDeleteStudent }) {
  const [editGrade, setEditGrade] = React.useState(student.grade.toString());
  const parsed = Number(editGrade);
  const currentGrade = Number.isFinite(parsed) ? parsed : student.grade;
  const statusClass = currentGrade >= 40 ? 'pass' : 'fail';

  const handleUpdate = () => {
    onUpdateGrade(student.id, editGrade);
  };

  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          value={editGrade}
          onChange={(e) => setEditGrade(e.target.value)}
          onBlur={handleUpdate}
          min="0"
          max="100"
        />
      </td>
      <td className={statusClass}>{currentGrade >= 40 ? 'Pass' : 'Fail'}</td>
      <td>
        <button className="delete-btn" onClick={() => onDeleteStudent(student.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;

