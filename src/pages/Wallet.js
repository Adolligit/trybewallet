import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { apiRequest } from '../actions/index';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchAPI } = this.props;

    fetchAPI();
  }

  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAPI: () => dispatch(apiRequest()),
  };
}

Wallet.propTypes = {
  fetchApi: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
