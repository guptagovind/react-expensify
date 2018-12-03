import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';

test('should show one expense with totalling', ()=>{
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1000}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should show multiple expenses with totalling', ()=>{
  const wrapper = shallow(<ExpensesSummary expensesCount={4} expensesTotal={5000}/>);
  expect(wrapper).toMatchSnapshot();
});
