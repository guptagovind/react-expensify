import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashBoardPage';

test('should render the expense dashboard', () =>{
  const wrapper = shallow(<ExpenseDashboardPage/>);
  expect(wrapper).toMatchSnapshot();
});