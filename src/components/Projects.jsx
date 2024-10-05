

import React from 'react';
import '../styles.css';

const Projects = () => {
  const projectData = [
    { title: 'BookLore', description: 'A book search website using EJS, Node.js, and the Google Books API.',link:'https://github.com/mugenGH/book-lore' },
    { title: 'To-Do List App', description: 'A full stack to-do list app using React, Node.js, and PostgreSQL.',link:'https://github.com/mugenGH/React-fullstack-todolist-' },
    { title: 'simon game', description: 'The Simon game is an electronic game where players repeat a sequence of flashing lights and sounds by pressing colored buttons.',link:'https://github.com/mugenGH/simon-game' },
     // Add more projects
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-card">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
              <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={`./${project.title}.jpg`} alt={project.title} />
              <h3>{project.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

