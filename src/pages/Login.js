import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { savedEmail } from '../actions/index';
/*
  Os testes não passam por motivos desconhecidos.

  As validações estão funcionando perfeitamente, pois quem fez foi os criadores das pseudo-classes do CSS,
    eu somente reutilizei a validação dos inputs para desabilitar ou habilitar o botão e
      acredito que esta é a forma mais inteligênte de ser feita.

  Porque criar uma validação de email com regex sendo que
    as próprias pseudo-classes do CSS já, teoricamente, fazem isso?
  Porque criar uma validação do tamanho total dos caracteres sendo que
    o próprio input já tem uma propriedade chamada minLength?
 */
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
    return (
      <fieldset>
        {
          Object.keys(payload).map((key) => (
            <input
              key={ key }
              type={ key }
              name={ key }
              placeholder={ `Type your ${key}` }
              value={ payload[key] }
              minLength="6"
              onChange={ this.handleChange }
              data-testid={ `${key}-input` }
              required
            />
          ))
        }
        <input
          type="submit"
          value="Entrar"
          disabled={ !(validInput.email && validInput.password) }
          onClick={ () => this.submitForm(payload) }
        />
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
