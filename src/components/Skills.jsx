import React from "react";
import '../styles.css';

const skillsData = [
  { skill: "JavaScript", level: 70 },
  { skill: "React", level: 65 },
  { skill: "Node.js", level: 80 },
  { skill: "HTML/CSS", level: 80},
  { skill: "PostgreSQL", level: 70 },
  { skill: "Java", level: 70 },
  { skill: "EJS", level: 90 }
];

function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-card">
            <h3>{item.skill}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${item.level}%` }}>
                <span>{item.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
