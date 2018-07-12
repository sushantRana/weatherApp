import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootreducer from './reducers/rootreducer';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    rootreducer,
    initialState,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}