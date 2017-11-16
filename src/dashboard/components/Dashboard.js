import React, { Component } from 'react';

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
    const { handleLogout } = this.props;
    return (
      <div>
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  }
}

export default Dashboard;
