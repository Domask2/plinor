import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { all, call } from '@redux-saga/core/effects';

import { cartSagas } from './Cart/cart.sagas';
import { cartReducer } from './Cart/cart.reducer';


function* rootSaga() {
  yield all([call(cartSagas)]);
}

export const rootReducer = combineReducers({
  cart: cartReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)

  )
);

sagaMiddleware.run(rootSaga);

export { store };

export type RootState = ReturnType<typeof rootReducer>;