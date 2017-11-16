import React from 'react';
import ProjectColumnLayout from './ProjectColumnLayout';

const ProjectBoard = ({ project }) => (
  <div>
    <h1>{project.name}</h1>
    <ProjectColumnLayout columns={project.columns} />
  </div>
);

export default ProjectBoard;
