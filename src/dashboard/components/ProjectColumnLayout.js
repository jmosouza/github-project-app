import React from 'react';
import ProjectColumn from './ProjectColumn';

const ProjectColumnLayout = ({ columns }) => (
  <div>
    {columns.map(c => <ProjectColumn column={c} />)}
  </div>
);

export default ProjectColumnLayout;
