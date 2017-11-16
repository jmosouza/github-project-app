import React from 'react';
import ProjectCardLayout from './ProjectCardLayout';

const ProjectColumn = ({ column }) => (
  <div>
    <span>{column.name}</span>
    <span>{column.cards.count}</span>
    <ProjectCardLayout cards={column.cards} />
  </div>
);

export default ProjectColumn;
