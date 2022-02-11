import React, { Component } from 'react';

class LoginForm extends Component {
  username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSubmit = (event) => {
    // Prevents the app from making a network call, which is the default for HTML forms.
    event.preventDefault();

    // We want to call the server at the end and make the change later.
    // For now, just logging in console.
    console.log('Submitted!');
    const username = this.username.current.value;
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"></label>Username
            <input
              autoFocus
              ref={this.user}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>Password
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
