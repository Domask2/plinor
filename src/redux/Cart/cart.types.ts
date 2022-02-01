export interface ICart {
  id: number,
  title: string,
  width: number,
  array?: [
    {
      id?: number,
      title?: string,
      width?: number,
    }
  ]
};

export const ADD_TODO =  'ADD_TODO';


export enum cartTypes {
  ADD_TODO = 'ADD_TODO',
  ADD_TODO_SAGA = 'ADD_TODO_SAGA',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_TODO_SAGA = 'DELETE_TODO_SAGA',
  EDIT_TODO_ITEM_WIDTH = 'EDIT_TODO_ITEM_WIDTH',
  EDIT_TODO_ITEM_WIDTH_SAGA = 'EDIT_TODO_ITEM_WIDTH_SAGA',
  ADD_TODO_UP = 'ADD_TODO_UP',
  ADD_TODO_UP_SAGA = 'ADD_TODO_UP_SAGA',
  ADD_TODO_DOWN = 'ADD_TODO_DOWN',
  ADD_TODO_DOWN_SAGA = 'ADD_TODO_DOWN_SAGA',
  EDIT_NAME = 'EDIT_NAME',
  EDIT_NAME_SAGA = 'EDIT_NAME_SAGA',
}

export interface addTodoPayloadI {
  todo: ICart
  payload: {
    item: ICart
    childId?: number
  }
}

export interface addTodoI {
  type: cartTypes.ADD_TODO
  payload: addTodoPayloadI
}

export interface addTodoSagaI {
  type: cartTypes.ADD_TODO_SAGA
  payload: addTodoPayloadI
}

export type CartAction = 
    | addTodoI
    | addTodoSagaI
