import React, { Component } from 'react';
import ProjectBoardLayout from './ProjectBoardLayout';

class Dashboard extends Component {
  constructor(props) {
    if (!props.authenticated) {
      props.history.push('/');
    }
    super(props);
  }

  componentDidMount() {
    this.props.projectsGetAll();
  }

  render() {
    const { handleLogout, projects } = this.props;
    return (
      <div>
        <button onClick={handleLogout}>Log out</button>
        <ProjectBoardLayout projects={projects} />
      </div>
    );
  }
}

export default Dashboard;
