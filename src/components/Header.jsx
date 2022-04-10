import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <h2 data-testid="email-field">{ email }</h2>
        <h3 data-testid="total-field">0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

Header.propTypes = {
  emai: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
