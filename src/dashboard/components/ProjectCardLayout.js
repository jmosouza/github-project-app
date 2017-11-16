import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectCardLayout = ({ cards }) => (
  <div style={{ overflowY: 'auto', maxHeight: 500, padding: 1 }}>
    {cards.map(c => <ProjectCard key={c.id} card={c} />)}
  </div>
);

export default ProjectCardLayout;
