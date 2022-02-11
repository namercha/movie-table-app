import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  // username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  state = {
    account: { username: '', password: '' },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (event) => {
    // Prevents the app from making a network call, which is the default for HTML forms.
    event.preventDefault();

    // We want to call the server at the end and make the change later.
    // For now, just logging in console.
    console.log('Submitted!');
    const username = this.username.current.value;
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
