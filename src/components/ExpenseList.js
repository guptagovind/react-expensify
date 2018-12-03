import React from 'react';
import {connect} from 'react-redux';
import ExpensesListItem from './ExpenseListItem';
import selector from '../selectors/expenses';


export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    {
      props.expenses.length === 0
        ?(<div className="list-item list-item--message">
            <span>No Expenses </span>
          </div>
        )
        :(
          props.expenses.map((expense) => (
            <ExpensesListItem key={expense.id} {...expense}/>
          ))
        )
    }
    </div>
  </div>
);

const mapStateToProps = (state)=>{
  return {
    expenses:selector(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);