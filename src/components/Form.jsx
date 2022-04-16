import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, getCurrencies } from '../actions/index';

const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const INITIAL_STATE = {
  payload: {
    value: 0,
    currency: '',
    method: method[0],
    tag: tag[0],
    description: '',
  },
  response: [],
};

class Form extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  async addEvent() {
    const { currency, payload, response } = this.state;
    const { addExpenditure, fetchAPI, exchangeRates, expenses } = this.props;

    if (!currency) this.setState({ currency: response[0] });

    fetchAPI();
    addExpenditure({ id: expenses.length, ...payload, exchangeRates });
    this.setState(INITIAL_STATE);
  }

  render() {
    const { payload: { value, description } } = this.state;
    const { currencies } = this.props;

    return (
      <fieldset>
        <label htmlFor="value">
          Valor:
          <input
            name="value"
            type="number"
            data-testid="value-input"
            value={ value }
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
        <input
          value="Adicionar despesa"
          type="button"
          onClick={ this.addEvent }
        />
      </fieldset>
    );
  }
}

function mapStateToProps({ wallet }) {
  return {
    currencies: wallet.currencies,
    exchangeRates: wallet.apiResponse,
    expenses: wallet.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCurrencies: (acronyms) => dispatch(getCurrencies(acronyms)),
    addExpenditure: (expense) => dispatch(addExpense(expense)),
  };
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
