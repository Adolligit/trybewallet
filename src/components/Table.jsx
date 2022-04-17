import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => {
              const { name, ask } = expense.exchangeRates[expense.currency];
              const convertedValue = (ask * expense.value).toFixed(2);

              const value = (
                expense.value.includes('.')
                  ? expenses.value
                  : `${expense.value}.00`
              );

              return (
                <tr key={ expense.id }>
                  <td>{ expense.description }</td>
                  <td>{ expense.tag }</td>
                  <td>{ expense.method }</td>
                  <td>{ value }</td>
                  <td>{ name }</td>
                  <td>{ (+ask).toFixed(2) }</td>
                  <td>{ convertedValue }</td>
                  <td>Real</td>
                  <th>
                    <input value="Editar" type="button" />
                    <input value="Excluir" type="button" />
                  </th>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({ expenses: wallet.expenses });

Table.propTypes = { expenses: PropTypes.objectOf() }.isRequered;

export default connect(mapStateToProps)(Table);
