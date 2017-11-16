import React from 'react';
import ProjectCardLayout from './ProjectCardLayout';

const ProjectColumn = ({ column }) => (
  <div className="column is-3">
    <div className="card" style={{ backgroundColor: '#fafbfc' }}>
      <header className="card-header">
        <p className="card-header-title">
          {column.name}
          &nbsp;
          <span className="tag is-rounded">
            {column.cards.length}
          </span>
        </p>
      </header>
      <div className="card-content" style={{ padding: 10 }}>
        <ProjectCardLayout cards={column.cards} />
      </div>
    </div>
  </div>
);

export default ProjectColumn;
