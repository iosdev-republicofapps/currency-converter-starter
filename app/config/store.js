import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  // Should always be last, so it can listen to everything
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
