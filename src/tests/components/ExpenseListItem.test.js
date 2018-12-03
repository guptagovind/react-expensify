import React from 'react';
import {shallow} from 'enzyme';
import ExpenseItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render expenses Item', ()=>{
  const wrapper = shallow(<ExpenseItem {...expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
});