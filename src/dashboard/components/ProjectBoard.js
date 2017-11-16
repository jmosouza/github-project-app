import React from 'react';
import ProjectColumnLayout from './ProjectColumnLayout';

const ProjectBoard = ({ project }) => (
  <div>
    <h1 className="title">{project.name}</h1>
    <hr />
    <ProjectColumnLayout columns={project.columns} />
    <br />
  </div>
);

export default ProjectBoard;
