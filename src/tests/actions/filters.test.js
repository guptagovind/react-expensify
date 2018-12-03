import moment from 'moment';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';

test('Should setup the set text filter with provided value', () =>{
  const result = setTextFilter('Hello');
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text:'Hello'
  })
});

test('Should setup the set text filter with default value', () =>{
  const result = setTextFilter();
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text:''
  })
});

test('Should setup the sort by date filter', () =>{
  const result = sortByDate();
  expect(result).toEqual({
    type: 'SORT_BY_DATE'
  })
});

test('Should setup the sort by amount filter', () =>{
  const result = sortByAmount();
  expect(result).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
});


test('Should setup the start date filter', () =>{
  const result = setStartDate(moment(0));
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate:moment(0)
  })
});

test('Should setup the end date filter', () =>{
  const result = setEndDate(moment(0));
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate:moment(0)
  })
});
