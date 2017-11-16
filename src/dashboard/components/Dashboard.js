import React, { Component } from 'react';
import ProjectBoardLayout from './ProjectBoardLayout';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const { authenticated, history, getProjects } = this.props;
    if (!authenticated) {
      history.push('/');
      return;
    }
    getProjects();
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.handleLogout({
      history: this.props.history,
    });
  }

  render() {
    const { projects, projectsLoading } = this.props;
    return (
      <div>
        <button onClick={this.handleLogout}>Log out</button>
        <ProjectBoardLayout projects={projects} />
        {projectsLoading && <span>loading...</span>}
      </div>
    );
  }
}

export default Dashboard;
