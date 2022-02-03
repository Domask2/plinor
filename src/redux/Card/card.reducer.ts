import { cardTypes, CardAction, ICard } from "./card.types";
import cardArray from "./data";
import { addCardNewItem, editNameCard, editCardWidth, addCardUpDown, deleteCardItem, addCardDown } from "./card.helper";

export type TInitialState = typeof initialState;

const initialState = {
  card: cardArray as ICard[],
};

export const cardReducer = (
  state = initialState,
  action: CardAction
): TInitialState => {
  switch (action.type) {
    case cardTypes.ADD_CARD_SAGA:
      return {
        ...state,
        card: addCardNewItem([...state.card], action.payload),
      };
    case cardTypes.EDIT_NAME_SAGA:
      return {
        ...state,
        card: editNameCard([...state.card], action.payload),
      };
    case cardTypes.EDIT_CARD_WIDTH_SAGA:
      return {
        ...state,
        card: editCardWidth([...state.card], action.payload),
      };
    case cardTypes.ADD_CARD_UP_SAGA:
      return {
        ...state,
        card: addCardUpDown([...state.card], action.payload, '+'),
      };
    case cardTypes.ADD_CARD_DOWN_SAGA:
      return {
        ...state,
        card: addCardDown([...state.card], action.payload),
      };
    case cardTypes.DELETE_CARD_SAGA:
      return {
        ...state,
        card: deleteCardItem([...state.card], action.payload),
      };
    default:
      return state;
  }
};
