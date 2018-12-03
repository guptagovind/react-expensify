import moment from 'moment';
import ExpensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should add an expense', () =>{
 const expense = {
   id:4,
   description:'4th one',
   note: 'Testing',
   createdAt:moment(0).subtract(5,'days').valueOf(),
   amount: 9000
 };
 const action = {
   type:'ADD_EXPENSE',
   expense
 };

 const result = ExpensesReducer(expenses,action);
 expect(result).toEqual([...expenses,expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: '2nd one',
    note: 'edit',
    createdAt: moment(0).subtract(2, 'days').valueOf(),
    amount: 8000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const result = ExpensesReducer(expenses, action);
  expect(result).toEqual([expenses[0], {
    id: expenses[1].id,
    description: '2nd one',
    note: 'edit',
    createdAt: moment(0).subtract(2, 'days').valueOf(),
    amount: 8000
  }, expenses[2]])
});

test('should not edit expense if expenses not found', () => {
  const updates = {
    description: '3rd one',
    note: 'edit for non exist object',
    createdAt: moment(0).subtract(2, 'days').valueOf(),
    amount: 9000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '6',
    updates
  };
  const result = ExpensesReducer(expenses, action);
  expect(result).toEqual(expenses);
});

test('should set expense',() =>{
  const action = {
    type:'SET_EXPENSES',
    expenses:[expenses[1]]
  };

  const result = ExpensesReducer(expenses,action);
  expect(result).toEqual([expenses[1]]);
});
