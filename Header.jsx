import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <p className="version">Student Scoreboard</p>
        <h1>
          React <span>Student</span> Scoreboard
        </h1>
      </div>
      <div className="header-right" />
    </header>
  );
}

export default Header;

