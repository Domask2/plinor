import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  addCardSagaI,
  cardTypes,
  addEditNameCardSagaI,
  editWidthCardSagaI,
  addCardUpSagaI,
  addCardDownSagaI,
  deleteCardSagaI,
} from "./card.types";
import {
  addCardSaga,
  addEditNameCardSaga,
  editWidthCardSaga,
  addCardUpSaga,
  addCardDownSaga,
  deleteCardSaga,
} from "./card.actions";

export function* onAddCardSaga({ payload }: addCardSagaI) {
  yield put(addCardSaga(payload));
}

export function* onAddCard() {
  yield takeLatest(cardTypes.ADD_CARD, onAddCardSaga);
}

export function* editNameCardSaga({ payload }: addEditNameCardSagaI) {
  yield put(addEditNameCardSaga(payload));
}

export function* onEditNameCard() {
  yield takeLatest(cardTypes.EDIT_NAME, editNameCardSaga);
}

export function* onEditWidthSaga({ payload }: editWidthCardSagaI) {
  yield put(editWidthCardSaga(payload));
}

export function* onEditWidth() {
  yield takeLatest(cardTypes.EDIT_CARD_WIDTH, onEditWidthSaga);
}

export function* onUpSaga({ payload }: addCardUpSagaI) {
  yield put(addCardUpSaga(payload));
}

export function* onUp() {
  yield takeLatest(cardTypes.ADD_CARD_UP, onUpSaga);
}

export function* onDownSaga({ payload }: addCardDownSagaI) {
  yield put(addCardDownSaga(payload));
}

export function* onDown() {
  yield takeLatest(cardTypes.ADD_CARD_DOWN, onDownSaga);
}

export function* onDeleteTodoSaga({ payload }: deleteCardSagaI) {
  yield put(deleteCardSaga(payload));
}

export function* onDelete() {
  yield takeLatest(cardTypes.DELETE_CARD, onDeleteTodoSaga);
}

export function* cardSagas() {
  yield all([
    call(onAddCard), 
    call(onEditNameCard), 
    call(onEditWidth),
    call(onUp),
    call(onDown),
    call(onDelete),
  ]);
}
