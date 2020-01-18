import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppContainer from './containers/AppContainer'
import * as serviceWorker from './serviceWorker';

const store = configureStore;

const Wrapper = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
