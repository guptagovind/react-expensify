import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addExpense,
  startAddExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = {auth:{uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) =>{
  const expensesData = {};
  expenses.forEach(({ id, description, amount, note, createdAt}) =>{
    expensesData[id] = {description, amount, note, createdAt}
  });

  database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done());
});

test('should setup remove expense action object', () =>{
  const result = removeExpense({id:'1234567'});
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'1234567'
  })
});

test('should remove the expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit expense action object', () => {
  const result = editExpense(
    '12345',
    {
      description: 'First One',
      note: 'Edit test',
      amount: 120,
      createdAt: 1234567890
    }
  );
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id:'12345',
    updates:{
      description: 'First One',
      note: 'Edit test',
      amount: 120,
      createdAt: 1234567890
    }
  })
});

test('should edit expense to database', (done) =>{
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = {
    amount:300
  };
  store.dispatch(startEditExpense(id,updates)).then(() =>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) =>{
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  });
});

test('Should setup add expense action object with provided values', () =>{
  var result = addExpense(expenses[2]);

  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});
test('should add expense with defaults to database and store', (done) =>{
  const store = createMockStore(defaultAuthState);
  const expenseDefault = {
    description: '',
    note : '',
    amount : 0,
    createdAt : 0
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefault);
    done();
  });

});

test('should setup set expense object with data', () =>{
  const result = setExpenses(expenses);
  expect(result).toEqual({
    type:'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from firebase',(done) =>{
  const store =  createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'SET_EXPENSES',
      expenses
    });
    done();
  });

});
