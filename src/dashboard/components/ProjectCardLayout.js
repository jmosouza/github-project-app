import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectCardLayout = ({ cards }) => (
  <div>
    {cards.map(c => <ProjectCard card={c} />)}
  </div>
);

export default ProjectCardLayout;
