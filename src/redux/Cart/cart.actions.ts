import { cartTypes, addTodoI, addTodoPayloadI, addTodoSagaI } from './cart.types';

export const addTodo = (payload: addTodoPayloadI): addTodoI => ({
  type: cartTypes.ADD_TODO,
  payload
})

export const addTodoSaga = (payload: addTodoPayloadI): addTodoSagaI => ({
  type: cartTypes.ADD_TODO_SAGA,
  payload
})