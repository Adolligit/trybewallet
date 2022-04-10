import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { savedEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      payload: {
        email: '',
        password: '',
      },
      validInput: {
        email: false,
        password: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value, validity } = target;

    this.setState((state) => (
      {
        payload: { ...state.payload, [name]: value },
        validInput: { ...state.validInput, [name]: validity.valid },
      }
    ));
  }

  submitForm() {
    const { submitLogin, history } = this.props;
    const { payload } = this.state;

    submitLogin(payload);
    history.push('/carteira');
  }

  render() {
    const { payload, validInput } = this.state;
    const { email, password } = payload;

    return (
      <fieldset>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={ password }
              minLength="6"
              onChange={ this.handleChange }
              data-testid="password-input"
              required
            />
          </label>
          <input
            type="submit"
            value="Entrar"
            disabled={ !(validInput.email && validInput.password) }
            onClick={ () => this.submitForm(payload) }
          />
        </form>
      </fieldset>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitLogin: (payload) => dispatch(savedEmail(payload)),
  };
}

Login.propTypes = {
  submitLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
