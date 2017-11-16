import React, { Component } from 'react';
import ProjectBoardLayout from './ProjectBoardLayout';

class Dashboard extends Component {
  componentDidMount() {
    const { authenticated, history, getProjects } = this.props;
    if (!authenticated) {
      history.push('/');
      return;
    }
    getProjects();
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
