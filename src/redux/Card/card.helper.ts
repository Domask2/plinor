import {
  addCardPayloadI,
  ICard,
  addEditNameCardPayloadI,
  editWidthCardPayloadI,
  addCardUpPayloadI,
  addCardDownPayloadI,
  deleteCardPayloadI,
} from "./card.types";

import { getIndexArray } from '../../utils/utils';

export const addCardNewItem = (state: ICard[], payload: addCardPayloadI) => {
  let newState = state;
  const { newCard, childId } = payload;

  if (childId) {
    const index = getIndexArray(newState, childId);

    if (newState[index].hasOwnProperty("array")) {
      newState[index].array?.push(newCard);
    } else {
      newState[index].array = [];
      newState[index].array?.push(newCard);
    }

  } else {
    newState.push(newCard);
  }

  return newState;
};

export const editNameCard = (state: ICard[], payload: addEditNameCardPayloadI) => {
  let newTodos = state;
  const { title, id, childId } = payload;

  if (childId) {
    const index = getIndexArray(newTodos, id);

    newTodos[index].array?.map((arr) => {
      if (arr.id === childId) {
        arr.title = title;
      }
      return arr;
    });
    return newTodos;

  } else {
    newTodos = newTodos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    });
    return newTodos;
  }
};

export const editCardWidth = (state: ICard[],payload: editWidthCardPayloadI) => {
  let newTodos = state;
  const { width, id, childId } = payload;

  if (childId) {
    const index = getIndexArray(newTodos, id);

    newTodos[index].array?.map((arr) => {
      if (arr.id === childId) {
        arr.width = width;
      }
      return arr;
    });
    return newTodos;

  } else {
    newTodos = newTodos.map((todo) => {
      if (todo.id === id) {
        todo.width = width;
      }
      return todo;
    });
    return newTodos;
  }
};

export const addCardUp = (state: ICard[],payload: addCardUpPayloadI,) => {
  let newTodos = state;
  const { id, childId } = payload;

  if (childId) {
    const index = getIndexArray(newTodos, id);
    const indexChild = newTodos[index].array?.findIndex((cart) => cart.id === childId);

    if (indexChild === 0) {
      return newTodos;
    }

    const el = newTodos[index].array?.splice(indexChild!, 1)[0];
    el && newTodos[index].array?.splice(indexChild! - 1, 0, el);

    return newTodos;

  } else {
    const index = getIndexArray(newTodos, id);

    if (index === 0) {
      return newTodos;
    }

    const el = newTodos.splice(index, 1)[0];
    newTodos.splice(index - 1, 0, el);
    return newTodos;
  }
};

export const addCardDown = (state: ICard[], payload: addCardDownPayloadI) => {
  let newTodos = state;
  const { id, childId } = payload;

  if (childId) {
    const index = getIndexArray(newTodos, id);
    let indexChild = newTodos[index].array?.findIndex(
      (cart) => cart.id === childId
    );

    if (indexChild === newTodos.length - 1) {
      return newTodos;
    }

    const el = newTodos[index].array?.splice(indexChild!, 1)[0];
    el && newTodos[index].array?.splice(indexChild! + 1, 0, el);

    return newTodos;
  } else {
    const index = getIndexArray(newTodos, id);

    if (index === newTodos.length - 1) {
      return newTodos;
    }

    const el = newTodos.splice(index, 1)[0];
    newTodos.splice(index + 1, 0, el);
    return newTodos;
  }
};

export const deleteCardItem = (state: ICard[], payload: deleteCardPayloadI) => {
  let newTodos = state;
  const { id, childId } = payload;

  if (childId) {
    const index = getIndexArray(newTodos, id);
    newTodos[index].array = newTodos[index].array?.filter((arr) => {
      return arr.id !== childId;
    });

    return newTodos;
  } else {
    newTodos = newTodos.filter((todo) => todo.id !== id);
    return newTodos;
  }
};
