import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {
  state = {
    data: {
      username: "",
      password: "",
    },
    loading: false,
    errors: {},
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!data.username) errors.username = "Can't be blank!";
    if (!data.password) errors.password = "Can't be blank!";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.username}>
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={ data.username }
            onChange={ this.onChange }
          />
          { errors.username && <InlineError text={errors.username}/> }
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">password</label>
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            value = { data.password }
            onChange= { this.onChange }
          />
          { errors.password && <InlineError text={errors.password}/>}
        </Form.Field>
         <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;