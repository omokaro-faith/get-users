import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleWare from 'redux-saga'


const sagaMiddleWare = createSagaMiddleWare()

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose


const configureStore = createStore(
  () => {}, 
  composeEnhancers(applyMiddleware(sagaMiddleWare))
)

export default configureStore