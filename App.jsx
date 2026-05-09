import React from 'react'
import './App.css'
import Header from './Header.jsx'
import StudentTable from './StudentTable.jsx'

function App() {
  const [students, setStudents] = React.useState([
    { id: 1, name: 'Anshika', grade: 88 },
    { id: 2, name: 'Prahlad', grade: 70 },
    { id: 3, name: 'Drishti', grade: 90 },
    { id: 4, name: 'Namishaa', grade: 39 },
  ])

  const handleUpdateGrade = (id, nextGrade) => {
    const parsed = Number(nextGrade)
    const grade = Number.isFinite(parsed)
      ? Math.max(0, Math.min(100, parsed))
      : nextGrade

    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, grade } : s)))
  }

  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id))
  }

  const passCount = students.filter((s) => Number(s.grade) >= 40).length

  return (
    <div className="dashboard">
      <Header />

      <div className="main">
        <div className="navbar">
          <h2>Dashboard</h2>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="cards">
          <div className="card">
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </div>

          <div className="card">
            <h3>Courses</h3>
            <p>35</p>
          </div>

          <div className="card">
            <h3>Attendance</h3>
            <p>85%</p>
          </div>

          <div className="card">
            <h3>Performance</h3>
            <p>{passCount === students.length ? 'Excellent' : passCount > 0 ? 'Good' : 'Needs Improvement'}</p>
          </div>
        </div>

        <div className="chart">
          <h3>Performance Chart</h3>
          <div className="bar-container">
            <div className="bar" style={{ height: '70%' }}>
              70%
            </div>
            <div className="bar" style={{ height: '85%' }}>
              85%
            </div>
            <div className="bar" style={{ height: '60%' }}>
              60%
            </div>
            <div className="bar" style={{ height: '90%' }}>
              90%
            </div>
          </div>
        </div>

        <div className="table-section">
          <h3>Student List</h3>
          <StudentTable
            students={students}
            onDeleteStudent={handleDeleteStudent}
            onUpdateGrade={handleUpdateGrade}
          />
        </div>
      </div>
    </div>
  )
}

export default App

