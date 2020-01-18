import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas/sagas'
import userReducer from './reducers/userReducer'

const sagaMiddleWare = createSagaMiddleWare()

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose

const configureStore = createStore(
  combineReducers({
  userReducer
  }), 
  composeEnhancers(applyMiddleware(sagaMiddleWare))
)

sagaMiddleWare.run(rootSaga)

export default configureStore