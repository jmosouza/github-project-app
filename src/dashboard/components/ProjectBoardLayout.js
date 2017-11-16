import React from 'react';
import ProjectBoard from './ProjectBoard';

const ProjectBoardLayout = ({ projects }) => (
  <div>
    {projects.map(p => <ProjectBoard key={p.id} project={p} />)}
  </div>
);

export default ProjectBoardLayout;
