import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import { apiRequestWithoutUSDT, getCurrencies } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestAPIWithouUSDT } = this.props;

    requestAPIWithouUSDT();
  }

  render() {
    const { jsonData, vectorOfCoins } = this.props;

    if (jsonData) vectorOfCoins(Object.keys(jsonData));

    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

function mapStateToProps({ wallet }) {
  return {
    jsonData: wallet.response,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestAPIWithouUSDT: () => dispatch(apiRequestWithoutUSDT()),
    vectorOfCoins: (currencies) => dispatch(getCurrencies(currencies)),
  };
}

Wallet.propTypes = {
  requestAPIWithouUSDT: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
