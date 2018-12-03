import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

/*test('should render expense form', () =>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
});*/

test('should render expense form with data', () =>{
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', () =>{
  const value = 'New note';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('textarea').simulate('change',{
    target:{value}
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () =>{
  const value = "23.50";
  const wrapper  = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () =>{
  const value = "12.122";
  const wrapper  = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should set calender focus on change', () =>{
  const focused = true;
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calenderFocus')).toBe(focused);
});