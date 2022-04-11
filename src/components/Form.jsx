import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends Component {
  constructor() {
    super();
    this.state = {
      expense: 0,
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { expense, description } = this.state;
    const { currencies } = this.props;

    return (
      <fieldset>
        <label htmlFor="expense">
          Valor:
          <input
            name="expense"
            type="number"
            data-testid="value-input"
            value={ expense }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {
              currencies.map((currency) => (
                <option key={ currency } value={ currency }>
                  { currency }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            {
              method.map((name) => (
                <option key={ name } value={ name }>
                  { name }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            id="tag"
            name="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            {
              tag.map((element) => (
                <option key={ element } value={ element }>
                  { element }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            name="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps)(Form);
