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
      history: this.props.history,
    });
  }

  render() {
    const { loading, valid } = this.props;
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">GitHub Projects</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        disabled={loading}
                        name="username"
                        placeholder="Username"
                        ref={(i) => { this.usernameInput = i; }}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        disabled={loading}
                        type="password"
                        placeholder="Password"
                        ref={(i) => { this.passwordInput = i; }}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="button is-primary is-fullwidth"
                        disabled={loading}
                        type="submit"
                        value="Log in"
                      />
                    </div>
                  </div>
                  {valid || <p className="has-text-danger">Invalid credentials</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthForm;
