import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { apiRequest } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { fetchApi } = this.props;

    fetchApi();
  }

  render() {
    return (
      <Header />
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchApi: () => dispatch(apiRequest()),
  };
}

Wallet.propTypes = {
  fetchApi: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
