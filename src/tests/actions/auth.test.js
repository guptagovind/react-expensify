import {login, logout} from '../../actions/auth';

test('set login action', () => {
  const uid = 145;
  const result  = login(uid);
  expect(result).toEqual({
    type: 'LOGIN',
    uid
  })
});

test('set logout action', () => {
  const result  = logout();
  expect(result).toEqual({
    type: 'LOGOUT'
  })
});