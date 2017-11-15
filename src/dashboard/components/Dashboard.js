import React, { Component } from 'react';

class Dashboard extends Component {
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
