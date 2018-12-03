import moment from 'moment';
import FilterReducer from '../../reducers/filters';

test('should set text filter', () =>{
  const result = FilterReducer(undefined,{type:'SET_TEXT_FILTER',text:'Hello'});
  expect(result.text).toBe('Hello');
});

test('should set startDate filter', () =>{
  const result = FilterReducer(undefined,{type:'SET_START_DATE',startDate:moment(0)});
  expect(result.startDate).toEqual(moment(0));
});

test('should set endDate filter', () =>{
  const result = FilterReducer(undefined,{type:'SET_END_DATE',endDate:moment(0).subtract(4,'days')});
  expect(result.endDate).toEqual(moment(0).subtract(4,'days'));
});