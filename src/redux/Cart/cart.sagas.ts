import { takeLatest, put, all, call } from 'redux-saga/effects';
import { addTodoSagaI,addTodoPayloadI, cartTypes } from './cart.types';
import { addTodoSaga } from './cart.actions';



export function* onAddTodoSaga({payload}: addTodoSagaI) {
  yield put(addTodoSaga(payload));
};

export function* onAdd() {
  yield takeLatest(cartTypes.ADD_TODO, onAddTodoSaga);
};


export function* cartSagas() {
  yield all([
    call(onAdd),
  ]);
};