import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import configureStore from './configureStore';
import UsersContainer from './containers/UsersContainer'
import * as serviceWorker from './serviceWorker';

const store = configureStore;

const Wrapper = () => {
  return (
    <Provider store={store}>
    <Router>
        <Route path='/' exact component={UsersContainer} />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
