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
    const { username, projects, projectsLoading } = this.props;
    return (
      <div className="section">
        <div className="container">
          <div className="level">
            <div className="level-left">
              Welcome,&nbsp;<span className="has-text-weight-bold">{username}</span>
            </div>
            <div className="level-right">
              <button onClick={this.handleLogout} className="button is-small">Log out</button>
            </div>
          </div>
          <ProjectBoardLayout projects={projects} />
          {projectsLoading && <button className="button is-white is-loading is-fullwidth has-text-centered" />}
        </div>
      </div>
    );
  }
}

export default Dashboard;
