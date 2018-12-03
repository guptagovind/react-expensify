import authReducer from '../../reducers/auth';

test('should set login', () =>{
  const action = {
    type:'LOGIN',
    uid:123
  };
  const result = authReducer({},action);
  expect(result.uid).toBe(action.uid);
});

test('should set logout', () =>{
  const action = {
    type:'LOGOUT'
  };
  const result = authReducer({uid:'anything'},action);
  expect(result).toEqual({});
});