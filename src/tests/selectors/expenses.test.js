import moment from 'moment';
import ExpensesSelectors from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


test('Should filter by endDate',() =>{
  const filter = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:moment(0)
  };
  const result = ExpensesSelectors(expenses,filter);
  expect(result).toEqual([expenses[0],expenses[1]]);
});

test('Should sort by date',() =>{
  const filter = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
  };
  const result = ExpensesSelectors(expenses,filter);
  expect(result).toEqual([expenses[2], expenses[0],expenses[1]]);
});

test('Should sort by amount',() =>{
  const filter = {
    text:'',
    sortBy:'amount',
    startDate:undefined,
    endDate:undefined
  };
  const result = ExpensesSelectors(expenses,filter);
  expect(result).toEqual([expenses[1], expenses[2],expenses[0]]);
});