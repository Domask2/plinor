import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { all, call } from '@redux-saga/core/effects';

import { cardSagas } from './Card/card.sagas';
import { cardReducer } from './Card/card.reducer';


function* rootSaga() {
  yield all([call(cardSagas)]);
}

export const rootReducer = combineReducers({
  card: cardReducer
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