import 'whatwg-fetch';
import { createStore } from 'redux';

const counter = createStore((state, action) => {
  if (action.type === 'ADD') {
    return state + 1;
  }

  return state;
}, 0, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

counter.subscribe(() => {
  document.querySelector('.count').innerText = counter.getState();
});

document.querySelector('.button').addEventListener('click', () => {
  counter.dispatch({ type: 'ADD' });
});

counter.dispatch({ type: 'RESET' });
