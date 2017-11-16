import React from 'react';
import ProjectColumn from './ProjectColumn';

const ProjectColumnLayout = ({ columns }) => (
  <div className="columns" style={{ overflowX: 'auto' }}>
    {columns.map(c => <ProjectColumn key={c.id} column={c} />)}
  </div>
);

export default ProjectColumnLayout;
