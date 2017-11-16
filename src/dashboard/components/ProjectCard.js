import React from 'react';

const ProjectCard = ({ card }) => (
  <div className="box" style={{ padding: 10, marginBottom: 15 }}>
    <p>{card.note || '-'}</p>
    <p className="is-size-7" style={{ paddingTop: 5 }}>
      <span className="has-text-grey">Added by </span>
      {card.creator.login}
    </p>
  </div>
);

export default ProjectCard;
