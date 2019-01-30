import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { loadState, saveState } from './localstorage';

import rootReducer from './reducers';

import App from './App';

import './index.css';

const persistedState = loadState();
const store = createStore(rootReducer,persistedState);

store.subscribe(_ => {
  saveState(store.getState());
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
