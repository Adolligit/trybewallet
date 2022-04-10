import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { apiRequest } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { apiRequest } = this.props;

    apiRequest();
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
    apiRequest: () => dispatch(apiRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
// export default Wallet;
