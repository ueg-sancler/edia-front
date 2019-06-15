import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, combineReducers } from 'redux';
import ReduxToastr from 'react-redux-toastr';
import {reducer as toastr} from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
const INITIAL_STATE = { auth: false, user: null }

function auth(state = INITIAL_STATE, action) {
  if (action.type === 'SIGN_IN')
    return { ...state, user: action.user, auth: action.auth}

  return state
}

const reducer = combineReducers({ toastr, auth })

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <>
      <App />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick />
    </>
  </Provider>  
, document.getElementById('root'));