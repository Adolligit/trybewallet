import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addExpense,
  getCurrencies,
  apiRequestWithoutUSDT,
  setExpenseEdit,
} from '../actions/index';

const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      currency: 'USD',
      method: method[0],
      tag: tag[0],
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  addEvent() {
    const { exchangeRates, expenses, addExpenditure, apiRequest } = this.props;

    apiRequest();
    addExpenditure({ id: expenses.length, ...this.state, exchangeRates });
    this.setState({ value: 0 });
  }

  editEvent() {
    const { indexExpenseEdit, expenses, setExpense } = this.props;

    expenses[indexExpenseEdit] = { ...expenses[indexExpenseEdit], ...this.state };
    setExpense(expenses);
    this.setState({ value: 0 });
  }

  render() {
    const { value, description } = this.state;
    const { currencies, indexExpenseEdit } = this.props;

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
          value={
            (indexExpenseEdit !== undefined) ? 'Editar despesa' : 'Adicionar despesa'
          }
          type="button"
          onClick={ (indexExpenseEdit !== undefined) ? this.editEvent : this.addEvent }
        />
      </fieldset>
    );
  }
}

function mapStateToProps({ wallet }) {
  return {
    currencies: wallet.currencies,
    exchangeRates: wallet.jsonNoUSDT,
    expenses: wallet.expenses,
    indexExpenseEdit: wallet.indexExpenseEdit,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCurrencies: (acronyms) => dispatch(getCurrencies(acronyms)),
    addExpenditure: (expense) => dispatch(addExpense(expense)),
    apiRequest: () => dispatch(apiRequestWithoutUSDT()),
    setExpense: (expense) => dispatch(setExpenseEdit(expense)),
  };
}

Form.propTypes = { currencies: PropTypes.arrayOf() }.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
