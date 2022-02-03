import {
  cardTypes,
  addCardI,
  addCardPayloadI,
  addCardSagaI,
  addEditNameCardPayloadI,
  addEditNameCardI,
  addEditNameCardSagaI,
  editWidthCardPayloadI,
  editWidthCardI,
  editWidthCardSagaI,
  addCardUpPayloadI,
  addCardDownPayloadI,
  addCardUpI,
  addCardDownI,
  addCardUpSagaI,
  addCardDownSagaI,
  deleteCardPayloadI,
  deleteCardI,
  deleteCardSagaI
} from "./card.types";

export const addCard = (payload: addCardPayloadI): addCardI => ({
  type: cardTypes.ADD_CARD,
  payload,
});

export const addCardSaga = (payload: addCardPayloadI): addCardSagaI => ({
  type: cardTypes.ADD_CARD_SAGA,
  payload,
});

export const addEditNameCard = (payload: addEditNameCardPayloadI): addEditNameCardI => ({
  type: cardTypes.EDIT_NAME,
  payload,
});

export const addEditNameCardSaga = (payload: addEditNameCardPayloadI): addEditNameCardSagaI => ({
  type: cardTypes.EDIT_NAME_SAGA,
  payload,
});

export const editWidthCard = (payload: editWidthCardPayloadI): editWidthCardI=> ({
  type: cardTypes.EDIT_CARD_WIDTH,
  payload
})

export const editWidthCardSaga = (payload: editWidthCardPayloadI): editWidthCardSagaI=> ({
  type: cardTypes.EDIT_CARD_WIDTH_SAGA,
  payload
})

export const addCardUp = (payload: addCardUpPayloadI): addCardUpI => ({
  type: cardTypes.ADD_CARD_UP,
  payload
})

export const addCardUpSaga = (payload: addCardUpPayloadI):addCardUpSagaI => ({
  type: cardTypes.ADD_CARD_UP_SAGA,
  payload
})

export const addCardDown = (payload: addCardDownPayloadI): addCardDownI => ({
  type: cardTypes.ADD_CARD_DOWN,
  payload
})

export const addCardDownSaga = (payload: addCardDownPayloadI):addCardDownSagaI => ({
  type: cardTypes.ADD_CARD_DOWN_SAGA,
  payload
})

export const deleteCard = (payload: deleteCardPayloadI): deleteCardI => ({
  type: cardTypes.DELETE_CARD,
  payload
})

export const deleteCardSaga = (payload: deleteCardPayloadI): deleteCardSagaI => ({
  type: cardTypes.DELETE_CARD_SAGA,
  payload
})
