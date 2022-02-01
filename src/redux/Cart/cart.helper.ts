import { addTodoPayloadI } from "./cart.types";
import { ICart } from "./cart.types";

export const addTodoItem = (state: ICart[], { payload }: addTodoPayloadI) => {
  let newState = state;
  const { item, childId } = payload;

  if (childId) {
    let index = newState.findIndex((cart) => cart.id === childId);

    if (newState[index].hasOwnProperty("array")) {
      newState[index].array?.push(item);
    } else {
      newState[index].array = [{}];
      newState[index].array?.push(item);
    }
  } else {
    newState.push(item);
  }

  return newState;
};
