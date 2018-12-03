import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisible from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
/*import './playground/promises';*/

const store = configureStore();

/*store.dispatch(addExpense({description:'water bill', amount:2000}));
store.dispatch(addExpense({description:'gas bill', amount:1200, createdAt:1000}));
store.dispatch(addExpense({description:'Rent', amount:240000}));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);

const state  =  store.getState();
const visibleExpenses = getVisible(state.expenses,state.filters);*/

const j = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


let hasRendered = false;
const renderApp = () =>{
  if(!hasRendered){
      ReactDOM.render(j, document.getElementById('app'));
    hasRendered = true;
  }
};

/*ReactDOM.render(<LoginPage/>, document.getElementById('app'));*/

ReactDOM.render(<LoadingPage />, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('Login');
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() =>{
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
