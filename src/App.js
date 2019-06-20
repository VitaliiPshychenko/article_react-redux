import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ArticleHandler } from './components/ArticleHandler'
import { getNextState } from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(getNextState, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
      <ArticleHandler />
    </Provider>
    
  );
}

export default App;
