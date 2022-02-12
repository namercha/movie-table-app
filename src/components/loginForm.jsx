import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  // username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username === '') errors.username = 'Username is required.';
    if (account.password === '') errors.password = 'Password is required.';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required.';
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required.';
    }
  };

  handleSubmit = (event) => {
    // Prevents the app from making a network call, which is the default for HTML forms.
    event.preventDefault();

    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    // We want to call the server at the end and make the change later.
    // For now, just logging in console.
    console.log('Submitted!');
    const username = this.username.current.value;
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
