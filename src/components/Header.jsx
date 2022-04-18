import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.expenseConversion = this.expenseConversion.bind(this);
  }

  expenseConversion() {
    const { expenses } = this.props;

    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];

      acc += value * ask;
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <h2 data-testid="email-field">{ email }</h2>
        <h3 data-testid="total-field">{ this.expenseConversion().toFixed(2) }</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

function mapStateToProps({ user, wallet }) {
  return {
    email: user.email,
    expenses: wallet.expenses,
  };
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps)(Header);
