import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({
      username: this.usernameInput.value,
      password: this.passwordInput.value,
    });
  }

  render() {
    const { loading, valid } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input disabled={loading} name="username" ref={(i) => { this.usernameInput = i; }} />
        <input disabled={loading} type="password" ref={(i) => { this.passwordInput = i; }} />
        <input disabled={loading} type="submit" />
        {valid || <p>Invalid credentials</p>}
      </form>
    );
  }
}

export default AuthForm;
