import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import selector from '../selectors/expenses';
import expenseTotal from '../selectors/expense-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
  render() {
    return (
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Viewing <span>{this.props.expensesCount}</span> {this.props.expensesCount === 1 ? 'expense' : 'expenses'} totalling <span>{numeral(this.props.expensesTotal / 100).format('$0,0.00')}</span></h1>
          <div className="page-header__actions">
            <Link className="button"to="/create">Add Expenses</Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>({
    expensesCount:selector(state.expenses, state.filters).length,
    expensesTotal:expenseTotal(selector(state.expenses, state.filters))
  });


export default connect(mapStateToProps)(ExpensesSummary);
